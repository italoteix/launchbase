const express = require('express');
const routes = express.Router();

const HomeController = require('../app/controllers/HomeController');

const users = require('./users');
const products = require('./products');

routes.get('/', HomeController.index);

routes.use('/products', products);
routes.use('/users', users);

// Alias
routes.get('/ads/create', function(req, res) {
  return res.redirect('/products/create');
});

routes.get('/accounts', function(req, res) {
  return res.redirect('/users/login');
});

module.exports = routes;
