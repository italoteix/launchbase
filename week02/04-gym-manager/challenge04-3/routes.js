const express = require('express');

const teachers = require('./teachers');

const routes = express.Router();

routes.get('/', function(req, res) {
  res.redirect('/teachers');
});

routes.get('/teachers', function(req, res) {
  res.render('teachers/index');
});

routes.get('/teachers/create', function(req, res) {
  res.render('teachers/create');
});

routes.post('/teachers/create', teachers.post);

routes.get('/students', function(req, res) {
  res.render('students/index');
});

module.exports = routes;
