console.log("Print 1") //Print 1
console.log("Print 1 %d",1) // Print 1 1
console.log("Print 1 %s","some string") // Print 1 some string
console.log("Print 1 "+ "some string") // Print 1 some string

console.time() // ##start time 
console.count("any") //1
console.count("any") //2
console.count("any") //3

console.countReset("any") //
console.count("any") //1
console.count("any") //2

console.error("error message") // error message
console.warn("warning message") // warning message

//console.clear() // clear all message

console.timeEnd(); // log the time spend when it stated 

const fs=require('fs');
const {Console}=require("console")
const printLog=fs.createWriteStream("./print.log")
const errorLog=fs.createWriteStream("./error.log")

const print=new Console(printLog);

// or 
const print1=new Console(printLog,errorLog);

print.log("Hello")
print.error("error")








