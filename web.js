var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
//var inFile = fs.readFile('./index.html');


app.get('/', function(request, response) {
 
 	response.write('hallo');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
