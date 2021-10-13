// require express
const express = require('express');

// require router from express
const router = express.Router();

// set route for /api requests
router.use('/api',require('./api'))

// exporting router
module.exports = router