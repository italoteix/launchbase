const express = require('express');
const nunjucks = require('nunjucks');

const videos = require('./data');

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false
});

server.get("/", function(req, res) {
  const about = {
    avatar_url: 'https://avatars2.githubusercontent.com/u/45885054?s=460&u=cea3d2a197b1776fd7e75d2eff15dbecb4f80b73&v=4',
    name: 'Ítalo Teixeira',
    role: 'Front-end Developer',
    description: 'Sailing to new horizons and delivering high-value mobile and web apps at <a href="https://barato.com.br" target="_blank">Barato</a>',
    links: [
      { name: 'Github', url: 'https://www.github.com/italoteix/' },
      { name: 'Twitter', url: 'https://www.twitter.com/italoteix/' },
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/italoteix/' }
    ]
  };

  res.render("about", { about });
});

server.get("/portfolio", function(req, res) {
  res.render("portfolio", { items: videos });
});

server.listen(5000, function() {
  console.log("Server is running!");
});
