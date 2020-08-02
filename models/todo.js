var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create schema and model
var todoSchema = new Schema({
  item: String,
});

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
