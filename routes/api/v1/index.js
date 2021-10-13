// require express
const express = require('express');

// require router from express
const router = express.Router();

// set route for /category requests
router.use('/category',require('./category'));

// set route for /product requests
router.use('/product',require('./product'));

// exporting router
module.exports = router