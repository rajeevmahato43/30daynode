const http=require("http");

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"})
    let user={
        name:"Rajeev",
        email:"rajevv@test.com"
    }
    res.end(JSON.stringify(user))

}).listen(3000,(err)=>{
    if(err) throw err;
    console.log("Application running on port 3000")

})