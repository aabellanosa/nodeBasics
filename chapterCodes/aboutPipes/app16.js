var http = require("http");
var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf-8");
// var myWriteStream = fs.createWriteStream(__dirname + "/readMeCopy.txt");

// using pipe method for  read and write
//myReadStream.pipe(myWriteStream);

// using pipe on the res (as this is a writable stream)
var server = http.createServer(function (req, res) {
  console.log("Request was made in:  " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf-8");
  myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("now listening on localhost:3000 yoh");
