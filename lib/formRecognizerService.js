const { DocumentAnalysisClient, AzureKeyCredential } = require("@azure/ai-form-recognizer");
const dotenv = require('dotenv');

if (typeof window === 'undefined') {
    dotenv.config();
}

const endpoint = process.env.FORM_RECOGNIZER_ENDPOINT;
const apiKey = process.env.FORM_RECOGNIZER_API_KEY;

const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(apiKey));

async function analyzeInvoice(blobUrl) {
    try {
        const poller = await client.beginAnalyzeDocumentFromUrl("prebuilt-invoice", blobUrl, {
            onProgress: (state) => {
                console.log(`Status: ${state.status}`);
            }
        });

        const { documents } = await poller.pollUntilDone();

        if (!documents || documents.length <= 0) {
            throw new Error("Failed to analyze the invoice.");
        }

        const invoiceData = documents[0].fields;
        console.log("Extracted Invoice Data:", invoiceData);
        return invoiceData;
    } catch (error) {
        console.error("Error analyzing invoice:", error);
        throw error;
    }
}

module.exports = {
    analyzeInvoice
};
