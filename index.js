#!/usr/bin/env node
var program = require('commander');
var commands = require('./commands')(program);
//
//
// program
//   .version('0.0.1')
//   .usage('<keywords>')
//   .command('github <username> <password>')
//   .action((un, pw) => {
//     var data = require('./userData.json')
//     data.github = { un, pw };
//     write(data);
//   });
//
// program
//   .version('0.0.1')
//   .usage('<keywords>')
//   .command('jira <username> <password>')
//   .action((un,pw) => {
//     var data = require('./userData.json')
//     data.jira = { un, pw };
//     write(data);
//   });
//
//
//   program
//     .version('0.0.1')
//     .usage('<keywords>')
//     .command('gh')
//     .action(() => {
//
//       var ghCore = require('./GithubCore/main');
//       ghCore.authorize();
//     });


program.parse(process.argv);

if (!program.args.length) { program.help(); }  


// function write(object) {
//   var fs = require('fs');
//   fs.writeFile('userData.json', JSON.stringify(object), function(err) {
//     if (err) throw err;
//     console.log('file saved');
//   });
// }
