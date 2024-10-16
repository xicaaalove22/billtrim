import multer from 'multer';
import { promisify } from 'util';
import { uploadBlob } from '../../lib/storageService';
import { analyzeInvoice } from '../../lib/formRecognizerService';
import { saveInvoiceData, getInvoiceData } from '../../lib/cosmosDbService';

// 使用 multer 来处理文件上传
const upload = multer({ storage: multer.memoryStorage() });

// 将 multer 的单文件处理函数转换为 promise 形式，以便于 async/await 方式使用
const multerMiddleware = upload.single('file');
const runMiddleware = promisify(multerMiddleware);

export default async function handler(req, res) {
    // 限制方法类型为 POST 和 GET
    if (req.method !== 'POST' && req.method !== 'GET') {
        return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }

    // 创建一个30秒的超时控制器
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30秒

    try {
        if (req.method === 'POST') {
            // 处理文件上传
            await runMiddleware(req, res);

            // 将上传的文件上传到 Azure Blob 存储
            const blobUrl = await uploadBlob(req.file, { signal: controller.signal });

            // 调用 Azure Form Recognizer 解析发票信息
            const analysisResults = await analyzeInvoice(blobUrl, { signal: controller.signal });

            // 将解析结果存储到 Cosmos DB
            await saveInvoiceData(analysisResults, { signal: controller.signal });

            // 返回成功消息和数据
            return res.status(201).json({
                message: 'Invoice uploaded and processed successfully.',
                data: analysisResults,
            });
        } else if (req.method === 'GET') {
            // 处理 GET 请求，返回 Cosmos DB 中的发票数据
            const results = await getInvoiceData({ signal: controller.signal });
            return res.status(200).json(results);
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Request timed out:', error);
            return res.status(504).json({ message: 'Request timed out.' });
        }
        console.error('Error processing invoice:', error);
        return res.status(500).json({ message: 'Error processing invoice.' });
    } finally {
        clearTimeout(timeoutId); // 清除超时定时器
    }
}

// 禁用 Next.js 默认的 bodyParser，因为 multer 需要处理请求的 body
export const config = {
    api: {
        bodyParser: false,
    },
};
