var fs = require('fs');

// logging
const LOG_PATH = process.env.HOME + '/.cli-log';

var logMessages = [];

module.exports = {

    	log: function(entry) {
    		logMessages.push(entry);
  },

  dump: function() {
    console.log('For more information see: ' + LOG_PATH);
  	fs.writeFileSync(LOG_PATH, logMessages.join('\n') + '\n');
  }
}
