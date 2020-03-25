const express = require("express");
const methodOverride = require("method-override");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

var expressHandleBars = require("express-handlebars");

app.engine("handlebars", expressHandleBars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);	