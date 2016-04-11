//contenue on pg 259
//creating import modules per ch.9 instructions

// note that this needs to start up one 
// directory to find our models directory 
var ToDo = require("../models/todo.js"),
        ToDosController = {};

ToDosController.index = function (req, res) { 
	ToDo.find({}, function (err, toDos) {
            res.json(toDos);
        });
};

ToDosController.create = function (req, res) {
	var newToDo = new ToDo({"description":req.body.description,
		"tags":req.body.tags});
	newToDo.save(function (err, result) {
		console.log(result); 
		if (err !== null) {
	                // the element did not get saved!
	 
			console.log(err);
			res.json(500, err); 
		}else{
	                res.json(200, result);
	    	}
	}); 
};

module.exports = ToDosController;
