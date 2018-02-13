'use strict';

const express = require('express');
const ProductCtrl = require('../controllers/product');
const userCtrl = require('../controllers/user');
const auth = require('../middlewares/auth');
const api = express.Router();

api.get('/product', ProductCtrl.getProducts);
api.get('/product/:productId', ProductCtrl.getProduct);
api.post('/product', ProductCtrl.saveProduct);
api.put('/product/:productId', ProductCtrl.updateProduct);
api.delete('/product/:productId', ProductCtrl.deleteProduct);
api.post('/signup', userCtrl.singUp);
api.post('/signin', userCtrl.singIn);
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tiene acceso' })
});

module.exports = api;