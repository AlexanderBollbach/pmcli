// const logger = require('../logging/logger')


module.exports = function helloCommand(program) {
	'use strict';


	program
		.command('hello <name>')
		.description('Say hello to <name>')
		.action(function(name, command) {

		});

};
