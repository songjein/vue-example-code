var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function(req,res) {
	res.sendFile("/public/index.html")
});

app.listen(9998, function(){
	console.log('running on port 9998');
});
