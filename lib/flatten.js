module.exports = function(obj, callback) {
	var flat = obj;
	callback(null, branch(obj, flat));
};

var branch = function(obj, flat) {
	var classCheck = {}.toString;
	for (var attr in obj) {
		if(classCheck.call(obj[attr]).toString() === "[object Object]"){
			flat[attr] = obj[attr];
			branch(obj[attr], flat);
		}
		else if(classCheck.call(obj[attr]).toString() === "[object Array]"){
			for (var i = 0; i < obj[attr].length; i++){
				branch(obj[attr][i], flat);
			}
		}
		else{
			if( obj[attr] !== undefined)
				flat[attr] = obj[attr];
		}
	}
	return flat;
};