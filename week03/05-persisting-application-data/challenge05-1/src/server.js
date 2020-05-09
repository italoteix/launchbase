const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');

const routes = require('./routes');

const server = express();

server.use(express.static('public'));
server.use(methodOverride('_method'));
server.use(express.urlencoded({extended: true}));
server.set('view engine', 'njk');
nunjucks.configure('app/views', {
  noCache: true,
  express: server
})
server.use(routes);

server.listen(3000, function() {
  console.log('Server runnig on port 3000');
});
