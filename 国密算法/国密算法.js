//npm install sm-crypto --save

const sm2 = require('sm-crypto').sm2

const cipherMode = 1

let keypair = sm2.generateKeyPairHex()
let publicKey = keypair.publicKey
let privateKey = keypair.privateKey;

console.log(publicKey.length,publicKey)
console.log(privateKey.length,privateKey)

let data = "this is the data to be encrypted";

let encryptData = sm2.doEncrypt(data,publicKey, cipherMode);
let decryptData = sm2.doDecrypt(encryptData,privateKey,cipherMode)

console.log("encryptData: ", encryptData, " length:", encryptData.length)
console.log("decryptData: ", decryptData, " length:", decryptData.length)
