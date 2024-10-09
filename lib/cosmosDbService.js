const { CosmosClient } = require('@azure/cosmos');
const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.COSMOS_DB_CONNECTION_STRING;
const databaseName = process.env.COSMOS_DB_DATABASE_NAME;
const containerName = process.env.COSMOS_DB_CONTAINER_NAME;

const client = new CosmosClient(connectionString);
const database = client.database(databaseName);
const container = database.container(containerName);

async function saveInvoiceData(invoiceData) {
    const { resource: createdItem } = await container.items.create(invoiceData);
    console.log(`Created new item with id: ${createdItem.id}`);
    return createdItem;
}

async function getInvoiceData() {
    const { resources } = await container.items
        .query({
            query: "SELECT * from c"
        })
        .fetchAll();
    return resources;
}

module.exports = {
    saveInvoiceData,
    getInvoiceData
};
