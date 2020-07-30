var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("this is the home page");
});

app.get("/contact", function (req, res) {
  res.send("this is the contact page");
});

app.get("/profile/:id", function (req, res) {
  res.send("You requested to see the profile of id: " + req.params.id);
});

app.listen(3000);
console.log("now listening on port 3000");
