var express = require('express');
var path = require('path');

var fs = require('fs');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
	filelist = "";
	fs.readdirSync("public").forEach(file => {
		filelist += '<a href="/' + file + '">' + file + '</a><br>';
	})
	res.send("type <b>address:port</b>/<span style='color:red'>filename</span><br>" + filelist);
});

app.listen(9998, function(){
	console.log('running on port 9998');
});
