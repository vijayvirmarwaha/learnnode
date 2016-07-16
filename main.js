console.log("hello world!");
var http=require("http");
var express=require("express");

http.createServer(function(request,response){
	
	response.writeHead(200,{'Content-type':'text/plain'});
	response.end("hello node application");
}).listen(8081);