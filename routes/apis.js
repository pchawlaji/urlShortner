const express = require('express');
const router = express.Router();

// import the controller
const { handleURLShortener } = require('../controllers/contollerUrl');
const { handleGetIds } = require('../controllers/controllerGetIds');
const { handleAnalytics } = require('../controllers/controllerAnalytics');


// Route to handle the URL shortener
router.post('/url', handleURLShortener);
// Route to handle the shortend ID to return the original URL
router.get('/:shortId', handleGetIds);
// Route to handle the analytics
router.get('/analytics/:shortId', handleAnalytics);


module.exports = router;
