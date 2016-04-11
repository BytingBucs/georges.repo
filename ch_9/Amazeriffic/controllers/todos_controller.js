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

ToDosController.show = function (req, res) { 
	// this is the id that gets sent to the URL 
	var id = req.params.id;
	ToDo.find({"_id":id}, function (err, todo) { 
		if (err !== null) {
                	// we'll return an internal server error
                	res.json(500, err);
		}else{
			if (todo.length > 0) {
                    	// we'll return success!
			res.json(200, todo[0]); 
			}else{
                    		// we didn't find the todo with that id!
                    		res.send(404);
                	}
		} 
	});
};

module.exports = ToDosController;

