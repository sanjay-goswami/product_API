// require express
const express = require('express');

// require router from express
const router = express.Router();

// require product controller
const product = require('../../../controllers/api/v1/product'); 

// use JSON for passing json data 
router.use(express.json())

//setting post route for creating new product
router.post('/create',product.create);

// setting  get request for read all product
router.get('/readAll',product.readAll);

// setting  get request for read particular product
router.get('/read/:id',product.read);

// setting  patch request for updating particular product
router.patch('/update/:id',product.update);

// setting  delete request for delete particular product
router.delete('/delete/:id',product.delete);

// exporting router
module.exports = router