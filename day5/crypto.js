/*
crypto is a module in node.js use to encrypt 
crypto module in node.js is used to provide cryptographic functionalities.
It includes a set of wrappers for OpenSSL's hash , HMAC , verify , cipher , decipher and sign functions.

What is hashing ?
Hashing is a process of generating a fixed length value from a string using mathematical functions. It is used for providing security.
Every hash generated using hashing is :

Unique : In hashing , for every unique input we will get unique output. we will get the same output for same input no matter how many times you input the same data But if we just slightly change the input it will change the output to a large extent.
Fixed length : Hashing algorithms always generate the hash with the same length. The length of input does not affect the length of the output.
Irreversible : Generated hashes are irreversible in nature. We can not change the hash to the input text again

Examples of different hashing algorithms

*/
// 1. MD5 => MD5 stands for message digest 5 is a widely used hash function which produces 128-bit hashes

const crypto=require('crypto');

// creating hashing 
const hash=crypto.createHash('md5');
//adding data to hash
const data=hash.update('Rajeev','utf-8');

// change has into required format
const hashOut=data.digest("hex")

console.log(hashOut)


//Whirlpool hashing algorithm : This hashing algorithm takes input of any length less than 2256 bits and outputs a 512-bit hash.

// creating hashing 
const WhirlpoolHash=crypto.createHash('whirlpool');
//adding data to hash
const data1=WhirlpoolHash.update('Rajeev','utf-8');

// change has into required format
const encyCode=data1.digest("hex")

console.log(encyCode)