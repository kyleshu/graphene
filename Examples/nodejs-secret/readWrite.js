var crypto = require('crypto');
var sm2 = require('sm-crypto').sm2;

let keypair = sm2.generateKeyPairHex();
console.log(keypair);

var cipherText = {
  iv: '6884d3e43df7f4eee7443502fa3c17cb',
  encryptedData: '70aa53c2b8ca1e10c6022f434f9b8077'
};
var key = Buffer.from(process.env.ANOTHER_SECRET, 'hex');

let iv = Buffer.from(cipherText.iv, 'hex');
let encryptedData = Buffer.from(cipherText.encryptedData, 'hex');

let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encryptedData);
decrypted = Buffer.concat([decrypted, decipher.final()]);
let plaintext = decrypted.toString();
console.log(plaintext);
plaintext = plaintext + '!!!!';

var iv2 = crypto.randomBytes(16);

let cipher = crypto.createCipheriv('aes-256-cbc', key, iv2); 
let encrypted =  cipher.update(plaintext);
encrypted = Buffer.concat([encrypted, cipher.final()]);
let result = {iv: iv2.toString('hex'), encryptedData: encrypted.toString('hex')};

console.log(result);
