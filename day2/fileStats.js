// To Check the file stats mean file properties like is directory, is file, size permission;

const fs = require('fs');

// 1. Async Method
fs.stat('./debug_profile.txt', (err, stats) => {
    if (err) throw err;
    console.log("is file:-" + stats.isFile());
    console.log("is directory:-" + stats.isDirectory());
    console.log("file Size:-" + stats.size);
    console.log(stats);
})

//2. Sync Method
try {
    let syncStat = fs.statSync('./debug_profile.txt');

    console.log("is file:-" + syncStat.isFile());
    console.log("is directory:-" + syncStat.isDirectory());
    console.log("file Size:-" + syncStat.size);
    console.log(syncStat);
} catch (err) {
    throw err
}


