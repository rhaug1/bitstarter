var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var inFile = fs.readFile('index.html');
var output = new Buffer(infile);

app.get('/', function(request, response) {
 
 	response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
