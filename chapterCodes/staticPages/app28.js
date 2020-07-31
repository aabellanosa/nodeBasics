var express = require("express");
var app = express();

app.set("view engine", "ejs");
//middleware
app.use("/assets", express.static("assets"));

app.get("/", function (req, res) {
  //res.send("this is the home page"); //sending plain text
  //res.sendFile(__dirname + "/index.html");
  res.render("index");
});

app.get("/contact", function (req, res) {
  // res.send("this is the contact page"); //sending plaing text
  // res.sendFile(__dirname + "/contact.html");
  res.render("contact");
});

app.get("/profile/:name", function (req, res) {
  var data = {
    age: 52,
    gender: "Male",
    hobbies: ["eating", "reading", "writing"],
  };
  res.render("profile", { person: req.params.name, data: data });
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/404.html");
});

app.listen(3000);
console.log("now listening on port 3000");
