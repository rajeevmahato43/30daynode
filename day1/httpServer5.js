const http=require("http");
const fs=require("fs")

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"video/mp4"});
    if(fs.existsSync("/filename")){
        let steamData=fs.createReadStream('/');
        steamData.pipe(res);
    }


}).listen(3000,(err)=>{
    if(err) throw err;
    console.log("Application running on 3000")
    })