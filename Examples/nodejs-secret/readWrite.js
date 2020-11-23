var crypto = require('crypto');

var cipherText = {
  iv: 'ee8dfb987d8799de134eafd790d30bf2',
  encryptedData: '5a08b5d5d1050416e2775f5ddb4b5751'
};
var key = Buffer.from(process.env.ANOTHER_SECRET);

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
