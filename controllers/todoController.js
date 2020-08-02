var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var Todo = require("../models/todo");

//connect to atlas mongo.db formerly mlab
mongoose.connect(
  "mongodb+srv://test:test@cluster0.kkfi4.mongodb.net/tododb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//create a mongoose schema
// var todoSchema = new mongoose.Schema({
//   item: String,
// });

// var Todo = mongoose.model("Todo", todoSchema);

// var data = [{ item: "walk dog" }, { item: "walk cat" }, { item: "walk car" }];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.get("/todo", function (req, res) {
    //retrieve data from mongo.db and display it
    // console.log("yeap niagi na diri master");
    Todo.find({}, function (err, data) {
      if (err) throw err;
      res.render("todo", { todos: data });
    });
  });

  app.post("/todo", urlencodedParser, function (req, res) {
    Todo(req.body).save(function (err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete("/todo/:item", function (req, res) {
    Todo.find({ item: req.params.item.replace(/\-/g, " ") }).deleteOne(
      function (err, data) {
        if (err) throw err;
        res.json(data);
      }
    );

    // data = data.filter(function (todo) {
    //   return todo.item.replace(/ /g, "-") !== req.params.item;
    // });
    // res.json(data);
  });
};
