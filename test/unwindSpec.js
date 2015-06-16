var should	= require('should');
var unwind	= require('../unwind');

describe('#Unwind tests', function() {
	it('Should keep a 1-deep object flat', function(done) {
		unwind.flatten({"first": "data"}, function(err, response) {
			should.deepEqual(response, {"first": "data"});
			Object.keys(response).length.should.equal(1);
			done();
		});
	});
	
	it('Should unwind a 3-deep object and create three keys', function(done) {
		unwind.flatten({"first": {"second": {"third": "moreData"}}}, function(err, response) {
			should.deepEqual(response, goodResponse);
			Object.keys(response).length.should.equal(3);
			done();
		});
	});
	
	it('Should unwind a 5-deep object and create five keys', function(done) {
		unwind.flatten(bigObj, function(err, response) {
			should.deepEqual(response, bigReponse);
			Object.keys(response).length.should.equal(5);
			done();
		});
	});
	
	
});	

var bigObj = {
	"first": {
		"second": {
			"third": {
				"fourth": {
					"fifth" : "data"
					}
				}
			}
		}
	}
	
	var bigReponse = {
		"first": {"second": {"third": {	"fourth": {"fifth" : "data"}}}},
		"second": {"third": {	"fourth": {"fifth" : "data"}}},
		"third": {	"fourth": {"fifth" : "data"}},
		"fourth": {"fifth" : "data"},
		"fifth" : "data"
	}

var goodResponse = {"first": {"second": {"third": "moreData"}},
					"second": {"third": "moreData"},
					"third": "moreData"
					}