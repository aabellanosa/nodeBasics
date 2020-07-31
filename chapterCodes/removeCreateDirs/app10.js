var fs = require("fs");

//delete a file
// fs.unlink("fileToDelete.txt", function (err, result) {
//   if (err) console.log("error ", err);
//   else console.log("file deleted");
// });

//blocking directory creation and deletion
// fs.mkdirSync("stuff");
//fs.rmdirSync("stuff");

//non-blocking
fs.mkdir("stuff", function (err, result) {
  if (err) console.log("error ", err);
  fs.readFile("readMe.txt", "utf-8", function (err, data) {
    // console.log(data);
    fs.writeFile("./stuff/readMeCopy.txt", data, function (err, result) {
      if (err) console.log("error ", err);
    });
  });
});
