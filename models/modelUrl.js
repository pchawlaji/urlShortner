const mongoose = require('mongoose');
const collectionName = 'urls';

const urlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    originalUrl: {
        type: String,
        required: true
    },
    visitHistory: [{ time: { type: Number } }],
}, {
    timestamps: true,
})

const URL = mongoose.model('url', urlSchema, collectionName);

module.exports = URL;