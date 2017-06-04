
var request = require('request'),
    username = "alexander.bollbach@1stdibs.com",
    password = "rhapsody3",
    url = "https://1stdibs.atlassian.net/rest/api/latest/issue/DA-961",

    auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

request(
  {
       url : url,
       headers : {
           "Authorization" : auth
       }


   },
    function (error, response, body) {
        // Do more stuff with 'body' here



        console.log(body);

        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    }
);
