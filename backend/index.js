var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var user = require("./routes/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


// db connection with mongoose
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fullstack_training");


//use related routes
app.use('/users', user);

app.listen(4000, function () {
    console.log("server started");
})

