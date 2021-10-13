// require express
const express = require('express');

// require router from express
const router = express.Router();

// require category controller
const category = require('../../../controllers/api/v1/category'); 

// use JSON for passing json data 
router.use(express.json())

//setting post route for creating new category
router.post('/create',category.create);

// setting  get request for read all category 
router.get('/readAll',category.readAll);

// setting  get request for read particular category 
router.get('/read/:id',category.read);

// setting  patch request for updating particular category 
router.patch('/update/:id',category.update);

// setting  delete request for delete particular category 
router.delete('/delete/:id',category.delete);

// exporting router
module.exports = router