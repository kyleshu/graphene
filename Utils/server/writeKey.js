fs = require('fs');

var key = Buffer.from('07d3021b5cbb69050a08ee94e87eb053a88bb28cfb05b196c0cbd35ee22f9b24', 'hex');

fs.writeFile('reqfiles/wrap-key', key, function (err) {
  if (err) return console.log(err);
  console.log('Key successfully written!');
});
