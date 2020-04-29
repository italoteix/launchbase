const express = require('express');
const nunjucks = require('nunjucks');

const routes = require('./routes');

const server = express();

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'njk');
nunjucks.configure('views', {
  noCache: true,
  express: server
})

server.use(routes);

server.listen(3000, function() {
  console.log('Server running on port 3000!');
});
