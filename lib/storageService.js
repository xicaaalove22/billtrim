const { BlobServiceClient } = require('@azure/storage-blob');
const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = process.env.AZURE_BLOB_CONTAINER_NAME;

async function uploadBlob(file) {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobName = `${new Date().getTime()}-${file.originalname}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    const uploadBlobResponse = await blockBlobClient.uploadData(file.buffer, {
        blobHTTPHeaders: { blobContentType: file.mimetype }
    });
    console.log(`Blob was uploaded successfully. requestId: ${uploadBlobResponse.requestId}`);
    return blockBlobClient.url;
}

module.exports = {
    uploadBlob
};
