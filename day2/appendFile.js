const fs = require('fs');

const appnedText = "This appended text"

// 1. Async method
fs.appendFile("./fsFile.txt", appnedText, (err) => {
    if (err) throw err;

})


// 2. Sync Method
try {
    fs.appendFileSync("./fsSyncFile.txt", appnedText)
} catch (err) {
    console.log(err)
}

