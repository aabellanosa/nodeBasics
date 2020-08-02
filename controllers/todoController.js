var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//connect to atlas mongo.db formerly mlab
mongoose.connect(
  "mongodb+srv://test:test@cluster0.kkfi4.mongodb.net/tododb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//create a mongoose schema
var todoSchema = new mongoose.Schema({
  item: String,
});

var Todo = mongoose.model("Todo", todoSchema);
var itemOne = Todo({ item: "buy cokes" }).save(function (err) {
  if (err) throw err;
  console.log("item saved");
});

var data = [{ item: "walk dog" }, { item: "walk cat" }, { item: "walk car" }];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.get("/todo", function (req, res) {
    res.render("todo", { todos: data });
  });

  app.post("/todo", urlencodedParser, function (req, res) {
    data.push(req.body);
    res.json(data);
  });

  app.delete("/todo/:item", function (req, res) {
    data = data.filter(function (todo) {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data);
  });
};
