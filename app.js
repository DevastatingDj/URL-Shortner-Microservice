var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://<username>:<password>@ds219641.mlab.com:19641/chuckdb');

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