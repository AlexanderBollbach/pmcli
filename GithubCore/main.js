
var userData = require('../userData');
var request = require('request');

module.exports = {
  authorize: function() {
    var username = "alexander.bollbach@gmail.com",
        password = "rhapsody3",
        auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

    var options = {
      method: 'post',
      url: " https://api.github.com/repos/alexanderbollbach/Particle-Play/issues",
      headers: {
        "Authorization": auth,
        "User-Agent": "alexander.bollbach"
      },
      json: {
        "title": "CLI script",
        "body": "created from pmcli",
        "labels": ["huh?"]
      }
    }
    request(options, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });

  },
}
