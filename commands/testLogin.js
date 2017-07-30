const Github = require('../GithubCore/main.js')

module.exports = function(program) {
	'use strict';


	program
		.command('cred-test')
		.description('validate')
		.action(function(name, command) {

			console.log('lets validate: ');

			if (!Github.checkAuth()) {

				program.prompt.get({
					properties: {
						port: {
							description: 'enter Github username:',
							conform: null,
							pattern: /^\d+$/
						}
					}
				}, function (err, result) {
					if (err) {
						Github.updateCreds(result, "password");
						console.log('succesfully updated github creds');
					} else {
						console.log("entered gh un");
					}
				});
			}
		});

};
