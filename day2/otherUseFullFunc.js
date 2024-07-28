const fs = require("fs");

// 1. change mode async

fs.chmod("file", 0o0775, (err) => {
     if (err) throw err
 })

 fs.chmodSync("file", 0o0775,);


 // Change owner;
fs.chown("file", "uid","gid",(err) => {
    if (err) throw err
})

// to copy dir and subdir
fs.cp
fs.cpSync

// to copy file
fs.copyFile
fs.copyFileSync

// add dir
fs.mkdir
fs.mkdirSync

// delete file
fs.unlink
fs. unlinkSync

// delete dir
fs.rmdir
fs.rmdir

// remove file and dir
fs.rm
fs.rmSync

// check file and dir exists
fs.existsSync

