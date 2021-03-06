const express = require('express');
const nunjucks = require('nunjucks');

const routes = require('./routes');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.set('view engine', 'njk');
nunjucks.configure('views', {
  express: server,
  noCache: true
});

server.use(routes);

server.listen(5000, function() {
  console.log('Server is running on port 5000!');
});
