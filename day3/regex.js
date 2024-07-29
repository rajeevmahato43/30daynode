let emailPatter= /^[^\s@]+@[^\s@]+\.[^\s@/]+$/

let myEmail="rajeev@test.com";

console.log(myEmail.match(emailPatter)); // if valid it will return array of value else null

// Or
console.log(emailPatter.test(myEmail)) // it give you true and false;


let emailRegexp=new RegExp('^[^\s@]+@[^\s@]+\.[^\s@]+$');

console.log(emailPatter.test(myEmail))
console.log(myEmail.match(emailRegexp))