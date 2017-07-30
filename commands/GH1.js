const GITHUB = require('../GithubCore/main')

module.exports = function GH1(program) {
	'use strict';

	program
		.command('gh1')
		.description('fetch ur prs')
		.action(function(command) {


			console.log("running command: gh1");
				GITHUB.req1(function(response) {
					console.log(response);
				})
		});
};
