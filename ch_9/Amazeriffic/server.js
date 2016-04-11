// saving while contenturing testing on vagrant 13 apr 16
//modified by following ch .9 instructions, includes being created as work progresses



var express = require("express"),
    http = require("http"),
    // import the mongoose library
    mongoose = require("mongoose"),
    ToDosController = require("./controllers/todos_controller.js"),
    UsersController = require("./models/user.js"),
//book failed to mention above line
    app = express(),
    services,
    mongoUrl = "mongodb://localhost/amazeriffic";

app.use(express.static(__dirname + "/client"));
app.use(express.bodyParser());

if (process.env.VCAP_SERVICES) {
    services = JSON.parse(process.env.VCAP_SERVICES);
    mongoUrl = services["mongolab"][0].credentials.uri;
    console.log(process.env.VCAP_SERVICES);
}

console.log(mongoUrl);


//sections removed below due to organization from ch 9
// connect to the amazeriffic data store in mongo
mongoose.connect(mongoUrl);

// This is our mongoose model for todos
//var ToDoSchema = mongoose.Schema({
//    description: String,
//    tags: [ String ]
//});

//var ToDo = mongoose.model("ToDo", ToDoSchema);

http.createServer(app).listen(process.env.PORT || 3000);
//CHECKHURR
//app.get("/todos.json", function (req, res) {
//    ToDo.find({}, function (err, toDos) {
//	res.json(toDos);
//    });
//});
app.get("/todos.json", ToDosController.index);
app.post("/todos", ToDosController.create);

//app.post("/todos", function (req, res) {
 //   console.log(req.body);
//    var newToDo = new ToDo({"description":req.body.description, "tags":req.body.tags});
//    newToDo.save(function (err, result) {
//	if (err !== null) {
//	    // the element did not get saved!
//	    console.log(err);
//	    res.send("ERROR");
//	} else {
//	    // our client expects *all* of the todo items to be returned, so we'll do
//	    // an additional request to maintain compatibility
//	    ToDo.find({}, function (err, result) {
//		if (err !== null) {
//		    // the element did not get saved!
//		    res.send("ERROR");
//		}
//		res.json(result);
//	    });
//	}
//  });
//});


//routes added

//rename usersController.index to UsersController.index
//book had spelling errors
    app.get("/users.json", UsersController.index);
    app.post("/users", UsersController.create);
    app.get("/users/:username", UsersController.show);
app.put("/users/:username", UsersController.update);
    app.del("/users/:username", UsersController.destroy);

  app.get("/users/:username/todos.json", ToDosController.index);
    app.post("/users/:username/todos", ToDosController.create);
//    app.put("/users/:username/todos/:id", ToDosController.update);
//    app.del("/users/:username/todos/:id", ToDosController.destroy);
