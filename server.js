var express = require("express");
var methodOverride = require("method-override");
var app = express();
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// app.get("/", function (request, response) {
//     var viewJsPath = path.join(
//         __dirname,
//         "controllers",
//         "burger_controller.js"
//     );

//     response.sendFile(viewJsPath);
// });


var routes = require("./controllers/burger_controller.js");

app.get("/", routes);

app.listen(port);




// var express = require("express");
// var app = express();

// var PORT = process.env.PORT || 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// // Routes
// // =============================================================
// require("./app/routes/api-routes.js")(app);

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
