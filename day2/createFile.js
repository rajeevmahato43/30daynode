const fs=require('fs');
const content='Hello this is test file'

//1. Async Method
fs.writeFile('./fsFile.txt',content,(err,result)=>{
    if(err) throw err;
    console.log(result) // we will get undefined as it accepts 1 argument in callback 
})


// 2. Sync Method
try {
    fs.writeFileSync("./fsSyncFile.txt",content)
    // if it fails it will throw error else no res
    
} catch (error) {
    
}

