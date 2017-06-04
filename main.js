var program = require('commander');
var login = require('./login');
var config = require('./config');

program
  .version('0.0.1')
  .option('-l, --login', 'login')
  .parse(process.argv);

if (program.login)  {
  login(function(creds){
    config(creds);
  });
}
