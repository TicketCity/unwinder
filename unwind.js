var flatten = require('./lib/flatten');

module.exports.flatten = function(obj, callback) {
	flatten(obj, function(err, res) {
		callback(null, res);
	});
};