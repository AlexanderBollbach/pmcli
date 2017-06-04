
var fs = require('fs');

module.exports = exports = function(json) {


var jsonAsText = JSON.stringify(json);

fs.writeFile('config.json', jsonAsText, function(err) {
  if (err) throw err;
  console.log('file saved');
});



}
