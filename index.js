var express = require('express');
 var  app = express();
 var  port = 3000;
 var fs = require("fs");


 app.get('/index', function(req, res) {
 	 var is =fs.createReadStream("a.txt")
   	 is.pipe(res);
   
 });
 	
 	app.get('/indexdown', function(req, res) {
 	 var is =fs.createReadStream("a.txt");
     res.setHeader('Content-disposition', 'attachment; filename=abc.txt');
   	 is.pipe(res);
   
 });

 	app.get('/image', function(req, res) {
 	 var is =fs.createReadStream("srini.pdf")
   	 is.pipe(res);
   
 });
 	

app.listen(port,function(){

   console.log("listening on 3000:::::");

});