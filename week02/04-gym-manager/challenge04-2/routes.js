const express = require('express');

const routes = express.Router();

routes.get('/', function(req, res) {
  res.redirect('/teachers');
});

routes.get('/teachers', function(req, res) {
  res.render('teachers/index');
});

routes.get('/students', function(req, res) {
  res.render('students/index');
});

module.exports = routes;
