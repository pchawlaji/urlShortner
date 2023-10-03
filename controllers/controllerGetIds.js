const URL = require('../models/modelUrl');

/**
 * Handles the GET request for retrieving IDs.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} The redirect response.
 */
async function handleGetIds(req, res) {

    // Extract the shortId from the URL
    const shortId = req.params.shortId
    if (shortId == null) {
        return res.status(400).json({ error: 'shortId is required' })
    }

    // Record the new Visit to the URL
    const newVisit = await URL.findOneAndUpdate(
        { shortUrl: shortId },
        {
            $push: {
                visitHistory: { time: Date.now() }
            }
        })

    //Redirect to the original URL
    res.redirect(newVisit.originalUrl)
}

module.exports = { handleGetIds }