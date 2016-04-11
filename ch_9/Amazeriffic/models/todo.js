//forgot to include this in last push, another import 
//removed for updated code for completed site
//var mongoose = require("mongoose");
// This is our mongoose model for todos
//var ToDoSchema = mongoose.Schema({ 
//     description: String,
//     tags: [ String ]
//    });
//
//var ToDo = mongoose.model("ToDo", ToDoSchema); 

var mongoose = require("mongoose"), 
	ToDoSchema,
        ObjectId = mongoose.Schema.Types.ObjectId;
    
ToDoSchema = mongoose.Schema({
        description: String,
        tags: [ String ],
        owner : { type: ObjectId, ref: "User" }
 });
    
module.exports.ToDo = mongoose.model("ToDo", ToDoSchema);

//module.exports = ToDo;
