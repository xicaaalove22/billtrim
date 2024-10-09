import React, { useRef, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiFile } from 'react-icons/fi'; // 导入文件图标

export default function Landing04() {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [invoiceData, setInvoiceData] = useState(null); // 保存上传的发票数据
    const [selectedFile, setSelectedFile] = useState(null); // 保存选择的文件信息

    // `onDrop` 回调，当文件被拖入或选择时调用
    const onDrop = useCallback((acceptedFiles) => {
        // 只处理第一个文件
        const file = acceptedFiles[0];
        if (file) {
            setSelectedFile(file);
            setMessage('');
            setInvoiceData(null);
        }
    }, []);

    // 使用 `useDropzone` 创建拖拽区
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: '.pdf', // 仅接受 PDF 文件
        maxFiles: 1,    // 最多只允许上传一个文件
    });

    // 上传文件并调用 API
    const handleUpload = async () => {
        if (!selectedFile) {
            setMessage('Please select a file first.');
            return;
        }

        setLoading(true);
        setMessage('');
        setInvoiceData(null); // 上传前清空数据

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            // 调用 Next.js 的 API 路由
            const response = await fetch('/api/invoices', {
                method: 'POST',
                body: formData,
            });

            // 检查响应状态并解析数据
            if (response.ok) {
                const data = await response.json();
                setMessage('Upload and analysis succeeded!');
                setInvoiceData(data.data); // 保存上传后的发票数据到状态中
            } else {
                const errorText = await response.text();
                console.error('Error:', errorText);
                setMessage(`Error: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error('Upload failed:', error);
            setMessage(`Upload failed: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Upload and Analyze Invoice</h1>

            {/* 使用 react-dropzone 创建拖拽和点击上传区 */}
            <div
                {...getRootProps()}
                className={`border-4 border-dashed rounded p-8 mb-4 text-center cursor-pointer 
                    ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                style={{ height: '200px' }} // 设置上传框的高度
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p className="text-blue-600">Drop the file here...</p>
                ) : (
                    <p className="text-gray-500">Drag & drop a PDF file here, or click to select a file</p>
                )}
                {selectedFile && (
                    <div className="mt-4 text-green-700 text-2xl font-bold flex items-center justify-center">
                        <FiFile className="mr-2" size={60} /> {/* 添加文件图标 */}
                        <p>Selected file: {selectedFile.name}</p>
                    </div>
                )}
            </div>

            {/* 上传按钮和加载动画 */}
            <div className="flex items-center">
                <button
                    onClick={handleUpload}
                    className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded mb-4"
                    disabled={loading}
                >
                    {loading ? 'Uploading...' : 'Upload Invoice'}
                </button>
                {loading && (
                    <div className="ml-4 animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                )}
            </div>

            {/* 显示上传状态信息 */}
            {message && (
                <div className={`mt-4 p-2 rounded ${message.startsWith('Error') ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
                    {message}
                </div>
            )}

            {/* 如果有上传后的发票数据，则展示 */}
            {invoiceData && (
                <div className="mt-8 p-4 border rounded bg-gray-100">
                    <h2 className="text-xl font-bold mb-4">Invoice Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/* 逐项展示解析出来的发票字段 */}
                        <div><strong>Invoice ID:</strong> {invoiceData.InvoiceId?.value}</div>
                        <div><strong>Customer Name:</strong> {invoiceData.CustomerName?.value}</div>
                        <div><strong>Invoice Total:</strong> {invoiceData.InvoiceTotal?.value.currencySymbol}{invoiceData.InvoiceTotal?.value.amount}</div>
                        <div><strong>Amount Due:</strong> {invoiceData.AmountDue?.value.currencySymbol}{invoiceData.AmountDue?.value.amount}</div>
                        <div><strong>Invoice Date:</strong> {new Date(invoiceData.InvoiceDate?.value).toLocaleDateString()}</div>
                        <div><strong>Due Date:</strong> {new Date(invoiceData.DueDate?.value).toLocaleDateString()}</div>
                        <div><strong>Customer Address:</strong> {invoiceData.CustomerAddress?.value.streetAddress}, {invoiceData.CustomerAddress?.value.city}, {invoiceData.CustomerAddress?.value.state} {invoiceData.CustomerAddress?.value.postalCode}</div>
                        <div><strong>Service Address:</strong> {invoiceData.ServiceAddress?.value.streetAddress}, {invoiceData.ServiceAddress?.value.city}, {invoiceData.ServiceAddress?.value.state} {invoiceData.ServiceAddress?.value.postalCode}</div>
                    </div>
                </div>
            )}
        </div>
    );
}
