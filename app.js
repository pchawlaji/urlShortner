const express = require('express');
const { connectToMongoDB } = require('./utilities/connection');
// import the Routes
const apis = require('./routes/apis');

const app = express();
const PORT = 8000;

// connect to MongoDB
connectToMongoDB().then(() => {
    console.log('Connected to MongoDB');
});

// parse incoming requests
app.use(express.json());

// Call the Routes
app.use('/', apis);

// start the server
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); })
