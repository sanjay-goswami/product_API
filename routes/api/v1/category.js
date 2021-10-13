const express = require('express');
const router = express.Router();
const category = require('../../../controllers/api/v1/category'); 
router.use(express.json())
router.post('/create',category.create);
router.get('/readAll',category.readAll);
router.get('/read/:id',category.read);
router.patch('/update/:id',category.update);
router.delete('/delete/:id',category.delete);
module.exports = router