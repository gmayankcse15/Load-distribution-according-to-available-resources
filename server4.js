var express = require('express');
var app= express();
var request = require('request');
const  os = require('os');
var Remmem ;
var Remmem2 ;

app.get('/',function(req,res){
res.sendFile('in.html',{root:__dirname});
});

app.get('/in.js',function(req,res){
res.sendFile('in.js',{root:__dirname});
});



app.get('/page1.html',function(req,res){

		// Configure the request
		var options = {
		    url: 'http://localhost:8081/page1.html',

		   method: 'GET'
		}
		var options2 = {
		    url: 'http://localhost:8083/page1.html',

		    method: 'GET'
		}
		var options3 = {
		    url: 'http://localhost:80/page1.html',
		   method: 'GET'
		}
		var options4 = {
		    url: 'http://localhost:80/page1.html',
	
		   method: 'GET'
		}
		
		
	
		

		// Start the request
		request(options, function (error, response, body) 
		{
		    if (!error && response.statusCode == 200) {
		        // Send the body to the client who asked for it
		       //res.setHeader('content-type', 'text/HTML');
		        
				obj = JSON.parse(body);
				Remmem = obj.Remaining_Memory ;
			//	console.log("Option1: "+Remmem) ;
		   //     res.json({thisIsMyNumber: obj.Remaining_Memory});
		    }

		    else{
		    	res.status(404).send();
		    }
			
			request(options2, function (error, response, body) 
			{
				if (!error && response.statusCode == 200) 	
				{
					// Send the body to the client who asked for it
					//res.setHeader('content-type', 'text/HTML');
		        
					obj = JSON.parse(body);
					Remmem2 = obj.Remaining_Memory ;
				console.log("Option1: "+Remmem) ;
								
				console.log("Option2: "+Remmem2) ;
					//  res.json({thisIsMyNumber: Remmem2});
				
				
				
				if(Remmem2 > Remmem)
			{
				console.log("Request of Page 1 forwarded to Server A ('localhost')"); 		//Write IP here

			request(options3, function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        // Send the body to the client who asked for it
		       res.setHeader('content-type', 'text/HTML');
		       res.send(body); 
			//   console.log(body);
			//	obj = JSON.parse(body);
			//	Remmem = obj.Remaining_Memory ;
			//	console.log(Remmem) ;
		   //     res.json({thisIsMyNumber: obj.Remaining_Memory});
		    }

		    else{
		    	res.status(404).send();
		    }

		});
			
		}
		else{
				console.log("Request of Page 1 forwarded to Server B ('localhost')"); 		//Write IP here

			request(options4, function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        // Send the body to the client who asked for it
		       res.setHeader('content-type', 'text/HTML');
		       res.send(body); 
			   			  // console.log(body);

				//obj = JSON.parse(body);
				//Remmem = obj.Remaining_Memory ;
				//console.log(Remmem) ;
		   //     res.json({thisIsMyNumber: obj.Remaining_Memory});
		    }

		    else{
		    	res.status(404).send();
		    }

		});
			
			
			
			
			
		}
					
			}

				else	
				{
					res.status(404).send();
				}

			});
				
				//console.log("Option1: "+Remmem) ;
					
				//console.log("Option2: "+Remmem2) ;
					
				
				
				
		
		});
	
		
		

	});




app.listen(8082,function(){
	sa = 1;
	sb = 4;
console.log('server is running at port 8082');
});

