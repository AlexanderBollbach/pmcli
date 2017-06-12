var Client = require('node-rest-client').Client;
client = new Client();
var config = require('../config');
var request = require('request');


module.exports = {

  assign: function(issueID, assignee) {

    var creds = config.read();

    console.log(creds);
    var postData = {
      "username": creds.username,
      "password": creds.password

    }
    var options = {
      method: 'post',
      body: postData,
      json: true,
      url: "https://1stdibs.atlassian.net/rest/auth/1/session"
    }


    request.post(options, function(error, response, body) {

      var session = body.session;
      console.log(error);

      console.log(body);
      return;

      var urlString = `https://1stdibs.atlassian.net/rest/api/2/issue/${issueID}/assignee`;
      console.log(session);
      console.log(body);


      var options = {
        url: urlString,
        json: true,
        body: {
          "name": assignee
        },
        headers: {
          cookie: session.name + '=' + session.value,
          "Content-Type": "application/json"
        }
      }
      request.put(options, function(error, response, body) {
        // console.log("did put");
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      });
    });

  }
}
