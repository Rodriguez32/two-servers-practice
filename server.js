var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request,response){
    
    response.end("You are a wonderful student  " + request.url);
}

var server1 = http.createServer(handleRequest);

server1.listen(PORT1, function(){
    console.log("Server listening on: http://localhost:" + PORT1);
});

function handleRequestTwo(request,response){
    
    response.end("You are just terrible at this code thing  " + request.url);
}

var server2 = http.createServer(handleRequestTwo);

server2.listen(PORT2, function(){
    console.log("Server listening on: http://localhost:" + PORT2);
});