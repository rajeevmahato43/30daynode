/*
Encryption and decryption

Data that can be read and understood easily is known as Plain text. 
The problem with plain text is that everyone can read it.
But sometimes we don't want everyone to have the access to read the data i.e. the confidentiality of the data needs to be maintained.


Encryption : Encryption deals with providing confidentiality to the data so that only authorize personnel have access to the data. 
In encryption , Plain text is transformed to an unintelligible text with the help of key and algorithm which we can read but can not understand due to which the confidentiality of the data is protected. 
This unintelligible text is known as Cipher text 


Decryption : Decryption is the process of rendering the data , 
so that it can be changed into a human or machine readable and understandable form. 
It takes the cipher text as input and converts it into the plain text with the help of key and algorithm

Types of Encryption
There are 2 ways to encrypt and decrypt the content which are explained in detail below :

1. Symmetric or private key encryption
        same key is used to perform encryption and decryption. It is fast as compared to asymmetric.

2. Asymmetric or public key encryption:
        In asymmetric , we use a pair of keys to perform encryption and decryption. 
        In simple words, key which is used to encrypt is different from the key which is used to decrypt. 
        The key pair can be generated using openSSL or any other key pair generator. 
        The key pair consist of a public key and a private key. 
        Public key is known to all however the private key is only known to the person whom it belongs.
*/


// 1. Symmetric encryption and decryption

const crypto=require("crypto")
var fs = require('fs');  // used in Asymmetric function 

let algorithm = 'aes-256-ctr',password = '6970787039613669314d623455536234';
const ivString = '1234567890123456'; // 16 bytes for AES-256-CTR

// Convert the IV string to a Buffer
const iv = Buffer.from(ivString, 'utf-8');
function encryptText(text){
    //console.log(iv.toString('base64'))
    const cipher=crypto.createCipheriv(algorithm,password,iv)
    let encrypted=cipher.update(text,"utf-8",'hex')
    encrypted+=cipher.final();
    console.log(encrypted)
}


function decryptText(text){
    const decipher=crypto.createDecipheriv(algorithm,password,iv)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    console.log(dec);
}

encryptText("Hello");
decryptText("eadbcd3f04");



// 2. Asymmetric encryption and decryption
   // a. Public Key used for encryption amd private key for decryption 

function AsymmetricPrivate(){
//Reading the Public Key
pubK = privK = fs.readFileSync('pub.key').toString();

//Passing the text to be encrypted using private key
var buf = Buffer.from('This is secret code', 'utf8');

//Encrypting the text
secretData = crypto.publicEncrypt(pubK, buf);
//printing the encrypted text
console.log(secretData.toString('utf8'));
//reading the Private key
privK = {
    key: fs.readFileSync('priv.key').toString(),
    passphrase: 'test'
}
//decrypting the text using public key
origData = crypto.privateDecrypt(privK, secretData)
//Printing the original content
console.log(origData.toString());
}





//. Private Key used for encryption amd public key used for decryption 

function asymmetricPublic(){
    //Reading the Private Key
privK = {
    key: fs.readFileSync('priv.key').toString(),
    passphrase: 'nodejsera'
}
//Passing the text to be encrypted using private key
var buf = Buffer.from('rishabh', 'utf8');

//Encrypting the text
secretData = crypto.privateEncrypt(privK, buf);
//printing the encrypted text
console.log(secretData.toString('utf8'));
//reading the Public key
pubK = fs.readFileSync('pub.key').toString();
//decrypting the text using public key
origData = crypto.publicDecrypt(pubK, secretData)
//Printing the original content
console.log(origData.toString());
}