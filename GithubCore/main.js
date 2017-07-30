var request = require('request');
const persistance = require('../Persistance/JSONPersistance.js')

function hasCreds() {
  if (persistance.hasGithubCreds) { return false; }
  return true;
}

function updateCreds() {
  var prompt = require('prompt');
    prompt.start();
    prompt.get(['username', 'password'], function (err, result) {
      const gh = require('./GithubCore/main.js')
      gh.updateCreds(result.username, result.password);
    });
  persistance.updateGithub(username, password)
}

module.exports = function(program) {

  var module = {
  // authorize: function() {
  //   var username = "alexander.bollbach@gmail.com",
  //       password = "rhapsody3",
  //       auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
  //
  //   var options = {
  //     method: 'post',
  //     url: " https://api.github.com/repos/alexanderbollbach/Particle-Play/issues",
  //     headers: {
  //       "Authorization": auth,
  //       "User-Agent": "alexander.bollbach"
  //     },
  //     json: {
  //       "title": "CLI script",
  //       "body": "created from pmcli",
  //       "labels": ["huh?"]
  //     }
  //   }
  //   request(options, function (error, response, body) {
  //     console.log('error:', error); // Print the error if one occurred
  //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //     console.log('body:', body); // Print the HTML for the Google homepage.
  //   });
  //
  //
  // },

  req1: function(complete) {
    program.request({"url":"http://localhost:2000"}, function(err, res, body) {
      complete(body)
    })
  }

}
return module;
}
