var prompt = require('cli-prompt');


module.exports = exports = function(cb) {

  prompt('enter your username: ', function (val) {
    var username = val;
    prompt('and your password: ', function (val) {


      cb( {un: username, pw: val} );

    }, function (err) {
      console.error('unable to read last name: ' + err);
    });
  }, function (err) {
    console.error('unable to read first name: ' + err);
  });

}
