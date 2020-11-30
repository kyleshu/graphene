fs = require('fs');

var key = Buffer.from('6b42beb48d161a8799ac92dc53cf3902bc1a305821b0fc1edc1ebed2582cb8e5', 'hex');

fs.writeFile('files/wrap-key', key, function (err) {
  if (err) return console.log(err);
  console.log('Key successfully written!');
});
