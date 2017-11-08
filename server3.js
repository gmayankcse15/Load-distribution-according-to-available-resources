var express = require('express');
var app = express() ;
const os = require('os');
app.get('/', function(req, res){
	
	res.send('Hello World');
})
app.get('/page1.html',function(req, res){
	
	response = {
		Remaining_Memory:os.freemem()/(1024*1024*1024)
	}
	console.log(response);
	res.end(JSON.stringify(response));
})

var server = app.listen(8083, function(){
	
	var host = server.address().address
   var port = server.address().port
 
   console.log("Example app listening at http://%s:%s", host, port)

	
})
	