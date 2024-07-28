const fs=require("fs");


// 1. Async Method
fs.readFile('./debug_profile.txt',(err, data)=>{  // here we will get data into buffer.
    if(err) throw err;
    console.log(data)
    // convert buffer into file;
})

// 2. Sync Method
fs.readFile('./debug_profile.txt',"utf-8",(err, data)=>{  // here we will get data into text.
    if(err) throw err;
    console.log(data)
})

