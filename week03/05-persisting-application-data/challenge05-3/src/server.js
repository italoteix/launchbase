const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');

const routes = require('./routes');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(methodOverride('_method'));
server.use(express.static('public'));
server.use(routes);

server.set('view engine', 'njk');
nunjucks.configure('src/app/views', {
  noCache: true,
  express: server,
  autoescape: false
});

server.listen(3000, function() {
  console.log('Server running on port 3000!');
});
