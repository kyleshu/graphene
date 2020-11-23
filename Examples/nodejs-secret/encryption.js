var crypto = require('crypto');

var plaintext = 'Hello World!';
var key = Buffer.from('ffeeddccbbaa99887766554433221100');
var iv = crypto.randomBytes(16);

let cipher = crypto.createCipheriv('aes-256-cbc', key, iv); 
let encrypted =  cipher.update(plaintext);
encrypted = Buffer.concat([encrypted, cipher.final()]);
let result = {iv: iv.toString('hex'), encryptedData: encrypted.toString('hex')};

console.log(result);
