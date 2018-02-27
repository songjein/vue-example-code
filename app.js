var express = require('express');
var path = require('path');

var fs = require('fs');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
	res.send("type <b>address:port</b>/<span style='color:red'>filename</span><br>file list : " +  fs.readdirSync("public"));
});

app.listen(9998, function(){
	console.log('running on port 9998');
});
