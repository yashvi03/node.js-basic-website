var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    switch (req.url) {
      case "/":
        fs.readFile("index.html", function (err, data) {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
        break;
      case "/about":
        fs.readFile("about.html", function (err, data) {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
        break;
      case "/contact":
        fs.readFile("contact.html", function (err, data) {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
        break;
      default:
        fs.readFile("404.html", function (err, data) {
          if (err) throw err;
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
    }
  })
  .listen(8080);
