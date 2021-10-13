// require express
const express = require('express');

// require router from express
const router = express.Router();

// set route for /v1 requests
router.use('/v1',require('./v1'))

// exporting router
module.exports = router