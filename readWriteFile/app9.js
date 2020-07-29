var fs = require("fs");

//asynch or blocking code
// var readme = fs.readFileSync("readme.txt", "utf-8");
// fs.writeFileSync("writeme.txt", readme);

//synchronouse or non-blocking code
fs.readFile("readme.txt", "utf-8", function (err, data) {
  //console.log(data);
  fs.writeFile("writeme2.txt", data, function (err, result) {
    if (err) console.log("error ", err);
  });
});
