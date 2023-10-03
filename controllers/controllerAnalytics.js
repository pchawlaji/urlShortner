const URL = require('../models/modelUrl');

async function handleAnalytics(req, res) {
    console.log('Entered handleAnalytics')
    const { shortId } = req.params

    // Validate the request body if original url is not provided
    if (shortId == null) {
        return res.status(400).json({ error: 'shortId is required' })
    }

    // Find the analytics for the shortId
    const analytics = await URL.findOne({ shortUrl: shortId }, { visitHistory: 1 })

    // Return the analytics
    return res.status(400).json({ visitCount: analytics.visitHistory.length, visitHistory: analytics.visitHistory })

}

module.exports = { handleAnalytics }