const express = require('express');
const router = express.Router();

// import the controller
const { handleURLShortener } = require('../controllers/contollerUrl');
const { handleGetIds } = require('../controllers/controllerGetIds')


// Route to handle the URL shortener
router.post('/url', handleURLShortener);
// Route to handle the shortend ID to return the original URL
router.get('/:shortId', handleGetIds);


module.exports = router;
