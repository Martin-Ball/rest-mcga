const express = require('express');
const { getProduct, getProducts, createProduct, deleteProduct } = require('../controllers/productsController');
const { getClient, getClients, createClient, deleteClient } = require('../controllers/clientsController');
const router = express.Router();

router.get('/getProduct/:id', getProduct);
router.get('/getProducts', getProducts);
router.post('/addProduct', createProduct);
router.delete('/deleteProduct/:id', deleteProduct);

router.get('/getClient/:id', getClient);
router.get('/getClients', getClients);
router.post('/addClient', createClient);
router.delete('/deleteClient/:id', deleteClient);

module.exports = router