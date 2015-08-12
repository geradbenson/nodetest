var http = require('http');
var util = require('util');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
   res.write('Hello World');
   res.end;
   }).listen(3000);
   console.log("Listening");
