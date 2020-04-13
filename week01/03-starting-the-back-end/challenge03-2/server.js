const express = require("express");
const nunjucks = require("nunjucks");

const courses = require("./data");

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server
});

server.get("/", function(req, res) {
  const about = {
    name: 'Rockeseat',
    avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
    description: 'Technology education platform 🚀',
    stack: [
      { name: 'Node.js', url: 'https://i.dlpng.com/static/png/439759_preview.png' },
      { name: 'React', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png' },
      { name: 'React Native', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png' },
    ]
  };

  res.render("about", { about });
});

server.get("/courses", function(req, res) {
  res.render("courses", { items: courses });
});

server.use(function(req, res) {
  res.render("not-found");
});

server.listen(5000, function() {
  console.log("Server running on port 5000");
});
