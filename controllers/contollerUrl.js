const { randomIdGenerator } = require('../utilities/randomIdGenerator');
const URL = require('../models/modelUrl');

const SHORT_ID_LENGTH = 8

/**
 * Handles the URL shortener request.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves with the generated short URL.
 */
async function handleURLShortener(req, res) {

    console.log('Entered handleURLShortener')

    const body = req.body

    // Validate the request body if original url is not provided
    if (!body.url) {
        return res.status(400).json({ error: 'url is required' });
    }

    let { url: url } = body;

    // Check if the URL does not start with 'http://' and does not start with 'https://'
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        /** Add 'https://' to the URL since while redirecting it to the original 
        URL without the https the new entry is thrown back to the system */
        url = 'https://' + url
    }

    // Check if the URL already exists
    const existingDocument = await URL.findOne({ originalUrl: url })

    // Return the short URL
    if (existingDocument) {
        console.log('URL already exists')
        return res.json({
            originalUrl: url,
            shortUrl: existingDocument.shortUrl
        })
    }

    // Generate a random ID
    const shortID = await generateID();

    // Create a new URL
    await URL.create({
        shortUrl: shortID,
        originalUrl: url,
        visitHistory: []
    })

    // Return the short URL
    res.json({
        originalUrl: url,
        shortUrl: shortID
    })
}

/**
 * Generates a random ID and checks if it already exists in the database.
 *
 * @return {Promise<string>} A unique short ID.
 */
async function generateID() {

    // Generate a random ID
    let shortID = randomIdGenerator(SHORT_ID_LENGTH);

    // Check if the URL already exists
    const existingShortID = await URL.findOne({ shortUrl: shortID });

    // Return the short URL
    return existingShortID ? await generateID() : shortID;
}


module.exports = { handleURLShortener }