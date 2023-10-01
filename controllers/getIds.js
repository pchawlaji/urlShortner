// const URL = require('../models/url');

// async function handleGetIds(req, res) {
    
//     console.log('req.params')
//     console.log(req.params)

//     const shortId = req.params.shortId
//     if(shortId == null){
//         return res.status(400).json({ error: 'shortId is required' })
//     }

//     const newVisit = await URL.findOneAndUpdate(
//         { shortUrl: shortId },
//         {
//             $push: {
//                 visitHistory: { time: Date.now() }
//             }
//         })

//     console.log(newVisit)

//     res.redirect(newVisit.originalUrl)
// }

// module.exports = { handleGetIds }