const express = require('express');
const { connectToMongoDB } = require('./utilities/connection');
const URL = require('./models/url');

// import the Routes
const urlRoute = require('./routes/url');
//const idRoute = require('./routes/getIds');

const app = express();
const PORT = 8000;


// connect to MongoDB
connectToMongoDB().then(() => {
    console.log('Connected to MongoDB');
});

// parse incoming requests
app.use(express.json());

// Call the Routes
app.use('/url', urlRoute);
app.use('/:shortId', async (req, res) => {
    try {
        console.log('Received request for short ID:', req.params.shortId);

        const shortId = req.params.shortId;
        if (!shortId) {
            return res.status(400).json({ error: 'shortId is required' });
        }

        const newVisit = await URL.findOneAndUpdate(
            { shortUrl: shortId },
            {
                $push: {
                    visitHistory: { time: Date.now() }
                }
            }
        );

        console.log('New visit record:', newVisit);

        if (!newVisit) {
            return res.status(404).json({ error: 'Short ID not found' });
        }

        console.log('Redirecting to:', newVisit.originalUrl);
        res.redirect(newVisit.originalUrl);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// start the server
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); })
