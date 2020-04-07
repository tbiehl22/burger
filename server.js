const connection = require("./config/connection");
const express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));
app.use('/', require('./controllers/burger_controller'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.listen(PORT, function() {
//     console.log("APP is listening on PORT " + PORT);
//   });

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    }
});