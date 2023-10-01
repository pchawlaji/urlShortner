// const express = require('express');
// const router = express.Router();
// const URL = require('../models/url');

// router.get('/:shortId', async (req, res) => {
//     try {
//         console.log('Received request for short ID:', req.params.shortId);

//         const shortId = req.params.shortId;
//         if (!shortId) {
//             return res.status(400).json({ error: 'shortId is required' });
//         }

//         const newVisit = await URL.findOneAndUpdate(
//             { shortUrl: shortId },
//             {
//                 $push: {
//                     visitHistory: { time: Date.now() }
//                 }
//             }
//         );

//         console.log('New visit record:', newVisit);

//         if (!newVisit) {
//             return res.status(404).json({ error: 'Short ID not found' });
//         }

//         console.log('Redirecting to:', newVisit.originalUrl);
//         res.redirect(newVisit.originalUrl);
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// module.exports = router;
