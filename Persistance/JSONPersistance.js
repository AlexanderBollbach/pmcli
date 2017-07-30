var fs = require('fs');

function write(object) {
  const jsonString = JSON.stringify(object)
  console.log(jsonString);
  fs.writeFile(__dirname + '/Creds.json', jsonString, function(err) {
    if (err) throw err;
    console.log('file saved');
  });
}

module.exports = {
  updateGithub: function(username, password) {
    var creds = JSON.parse(fs.readFileSync(__dirname + '/Creds.json', 'utf8'));
    creds.github.username = username;
    creds.github.password = password;
    write(creds);
  },
  updateJira: function(newCreds) {
    var creds = JSON.parse(fs.readFileSync(__dirname + '/Creds.json', 'utf8'));
    creds.jira.username = newCreds.username;
    creds.jira.password = newCreds.password;
    write(creds);
  },
  hasGithubCreds: function() {
    var creds = JSON.parse(fs.readFileSync(__dirname + '/Creds.json', 'utf8'));
    if (creds.github.username && creds.github.username) {
      return true;
    }
    return false;
  }
}
