module.exports = function(obj, callback) {
	var flat = obj;
	branch(obj, flat, function(res) {
		callback(res)
	});
};

var branch = function(obj, flat, branchCallback) {
	for (var attr in obj) {
		var classCheck = {}.toString;
		if(classCheck.call(obj[attr]).toString() === "[object Object]"){
			flat[attr] = obj[attr];
			branch(obj[attr], flat, branchCallback);
		}
		else{
			if( obj[attr] !== undefined)
				flat[attr] = obj[attr];
			branchCallback(flat);
		}
	}
};
