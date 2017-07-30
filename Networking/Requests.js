var status = require('../lib/status');
var request = require('request');

module.exports = function wrapRequest(options, next) {
// console.log("requesting with " + options);
//   if (program.debug) {
//     program.logger.log('REQUEST: '.bold + JSON.stringify(options, null, 2));
//   } else {
//     program.logger.log(opts.url);
//   }
//   status.start();
  return request(options, function (err, res, body) {
    // status.stop();
    return next(err, res, body)
    // if (err) {
    //   if (program.debug) {
    //     program.errorMessage(err.message);
    //   }
    //   return next(err, res, body);
    // }
    // else {
    //   if (program.debug) {
    //     program.logger.log('RESPONSE: '.bold + JSON.stringify(res.headers, null, 2));
    //     program.logger.log('BODY: '.bold + JSON.stringify(res.body, null, 2));
    //   }
    //   return next(err, res, body);
    // }
  });
}
