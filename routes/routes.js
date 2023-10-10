const express = require('express');
const { getProduct, getProducts, createProduct, deleteProduct } = require('../controllers/productsController');
const router = express.Router();

router.get('/getProduct/:id', getProduct);
router.get('/getProducts', getProducts);
router.post('/addProduct', createProduct);
router.delete('/deleteProduct/:id', deleteProduct);

module.exports = router