const express = require('express');
const router = express.Router();

// import the controller
const { handleURLShortener } = require('../controllers/url');

router.post('/', handleURLShortener);

module.exports = router