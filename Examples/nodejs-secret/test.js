var crypto = require('crypto');
var fs = require('fs');

let rawResult = fs.readFileSync('result.json').toString();
let cipherText = JSON.parse(rawResult);

;
var key = Buffer.from("6b42beb48d161a8799ac92dc53cf3902bc1a305821b0fc1edc1ebed2582cb8e5", 'hex');

let iv = Buffer.from(cipherText.iv, 'hex');
let encryptedData = Buffer.from(cipherText.encryptedData, 'hex');

let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encryptedData);
decrypted = Buffer.concat([decrypted, decipher.final()]);
let plaintext = decrypted.toString();
console.log(plaintext);

