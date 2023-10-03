const mongoose = require('mongoose');
require('dotenv').config();

/**
 * Connects to MongoDB.
 *
 * @return {Promise<void>} - A promise that resolves when the connection is established.
 */
async function connectToMongoDB() {

    // Create the MongoDB URL
    let mongoDBUrl = process.env.MONGODB_URL
        .replace('<username>', process.env.MONGODB_USERNAME)
        .replace('<password>', process.env.MONGODB_PASSWORD)
        .replace('<database>', process.env.MONGODB_DATABASE_NAME)
        .replace('<cluster>', process.env.MONGODB_CLUSTER);

        console.log(mongoDBUrl)

    try { await mongoose.connect(mongoDBUrl) } catch (err) {
        console.log(err);
        throw new Error('Could not connect to MongoDB: ' + err);
    };
}

module.exports = { connectToMongoDB };