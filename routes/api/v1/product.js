const express = require('express');
const router = express.Router();
const product = require('../../../controllers/api/v1/product'); 
router.use(express.json())
router.post('/create',product.create);
router.get('/readAll',product.readAll);
router.get('/read/:id',product.read);
router.patch('/update/:id',product.update);
router.delete('/delete/:id',product.delete);

module.exports = router