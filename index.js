#!/usr/bin/env node
const fs = require('fs');
const util = require('util');

const program = require('commander');


// initialize commands
const commands = require('./commands')(program);


const packageJson = require('./package.json');
const status = require('./lib/status');

const logger = require('./logging/logger')

program
	.version(packageJson.version)
	.usage('<command> [options]')
	.option('-d, --debug', 'show debug info');

program.logger = logger

program.succeed = function (message) {
	var msg = util.format.apply(this, arguments);
	program.logger.log('Success: ' + msg, true);
	program.logger.dump();
};

program.errorMessage = function errorMessage() {
	var msg = util.format.apply(this, arguments);
	program.logger.log('Error: ' + msg, true);
	console.log(msg.red);
};

program.handleError = function handleError(err, exitCode) {
	if (err) {
		if (err.message) {
			program.errorMessage(err.message);
		} else {
			program.errorMessage(err);
		}
	}
	program.logger.dump()
	process.exit(exitCode || 1);
};

program.request = require('./Networking/Requests.js')

program.on('*', function() {
	console.log('Unknown Command: ' + program.args.join(' '));
	program.help();
});

module.exports = program;
