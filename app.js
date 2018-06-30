var mongoose = require('mongoose');
require('dotenv').config();
var db = mongoose.connect(process.env.MONGO_URL);

var bodyParser = require('body-parser');

var express = require('express');
var app = express();

var urlRouter = require('./routes/urlRouter')();

 app.use(bodyParser.text());
 app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname+"/views"));
app.use('/api/shorturl/new', urlRouter);

app.listen(port, function(){
    console.log("Server is running on port: "+port);
});