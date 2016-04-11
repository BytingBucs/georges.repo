//contenue on pg 259
//forgot to include this in last push, another import 

var mongoose = require("mongoose");

    // This is our mongoose model for todos
var ToDoSchema = mongoose.Schema({ 
     description: String,
     tags: [ String ]
    });

var ToDo = mongoose.model("ToDo", ToDoSchema); 

module.exports = ToDo;

