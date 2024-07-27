/*
 send html file 
*/
const http=require("http");
const fs= require('fs');

http.createServer((request,response)=>{
    console.log("Application runing on port 3000")
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('./index.html',(err, data)=>{
        if(err) throw err;
        response.end(data)
    })
}).listen(3000)