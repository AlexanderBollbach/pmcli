
var request = require('request'),
    username = "alexander.bollbach@1stdibs.com",
    password = "rhapsody3",
    // url = "https://1stdibs.atlassian.net/rest/api/latest/issue/DA-961",
    url = "https://1stdibs.atlassian.net/rest/api/2/issue/DA-961/assignee",
    auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

request.put(
  {
       url : url,
       headers : {
           "Authorization" : auth
       }
       ,
       json: true,
      body: { "name": "557058:c987a18b-b9f9-46d0-adce-7b8426b87e65" }


   },
    function (error, response, body) {
        // Do more stuff with 'body' here



        console.log(body);

        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    }
);
