const fs = require('fs');

console.log('Script start');


setTimeout(() => {
  console.log('Timer 1');
}, 0);

setImmediate(() => {
  console.log('Immediate 1');
});

fs.readFile('nonexistentfile.txt', (err) => {
  if (err) {
    console.error('Error:', err);
    Promise. resolve() .then(()=>{
      console.log("Promise 2")
    })
  } else {
    console.log('File content:', data);
  }
});

process.nextTick(()=>{
  console.log("Next Tick 1")
}) 
const promise1 = Promise. resolve() .then(()=>{ 
  console. log( 'Promise 1 ' ) ; 
  const timer2 = setTimeout(()=>{ 
  console. log( 'Timer 3 ' ) 

  },0)
  })
  process.nextTick(()=>{
    console.log("Next Tick 2")
  }) 
  
setTimeout(() => {
  console.log('Timer 2');
}, 0);

setImmediate(() => {
  console.log('Immediate 2');
  Promise. resolve() .then(()=>{
    console.log("Promise 2")
  })
});


fs.readFile("./index.html", (err) => {
  if(err) console.log(err);
  setTimeout(() => {
    console.log('timeout 4');
  }, 0);
  setImmediate(() => {
    console.log('immediate 4');
  });
});

setTimeout(() => {
  console.log('Timer 5');
}, 0);
setTimeout(() => {
  console.log('Timer 6');
}, 0);
console.log('Script end');

async function x(){
  return  10
}

console.log(x().then((data)=>console.log(data)))