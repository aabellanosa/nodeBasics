var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  console.log("request from: " + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html", "utf-8").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html", "utf-8").pipe(res);
  } else if (req.url === "/api/ninjas") {
    res.writeHead(200, { "Content-Type": "application/json" });
    var myNinjas = [
      { name: "Angel", age: 52 },
      { name: "Christian", age: 20 },
    ];
    res.end(JSON.stringify(myNinjas));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html", "utf-8").pipe(res);
  }
});

server.listen(3000, "127.0.0.1");
console.log("yeap listening ta diri sa port: 3000");
