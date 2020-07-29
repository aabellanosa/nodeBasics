var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf-8");

myReadStream.on("data", function (chunk) {
  console.log("new chunk received:");
  console.log(chunk);
});
