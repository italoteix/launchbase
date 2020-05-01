const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');

const routes = require('./routes');

const server = express(routes);

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(methodOverride('_method'));
server.use(routes);

server.set('view engine', 'njk');
nunjucks.configure('views', {
  noCache: true,
  express: server
})

server.listen(3000, function() {
  console.log('Server runing on port 3000');
});
