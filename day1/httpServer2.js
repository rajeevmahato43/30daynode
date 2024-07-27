
/**
    response.write() method use to send the string to client
 */
const http=require('http');
const host="127.0.0.1";
const port="3000"

const server=http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':"text/plain"});
    response.write("Hello from Node server");
    response.end();
})

server.listen(port,host,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Node application running on port:"+port)
    }
})