var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());


fs.readFileSync('./index.html', function (err,html){
	if (err)
{
	throw err;
}


app.get('/', function(request, response) {
 
 	response.write(html);
})
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
