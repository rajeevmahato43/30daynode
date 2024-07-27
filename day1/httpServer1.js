/*
Node.js provides builtin modules http. and http module have createServer function which use to create node server.

server.listen() is inbuilt function which use to proved the port of application

createServer()  function take callback with have request and res

response.writeHead()  function use to add the http status code and content type 

response.end() function use to end the request.

*/
const http=require('http');
const host="127.0.0.1";
const port=3000
const server=http.createServer((request, response)=>{
response.writeHead(200,{'Content-Type':"text/plain"})
console.log("Server Working")
response.end("Server Working successfully");
})
server.listen(port,host,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("application running on port:"+port)
    }
})