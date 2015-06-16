# Unwind

##### The unwind module copies deep objects to the first level. 

### What it does
##### If the original object is:
```javascript
	{"first": {"second": {"third" : "data"}}}
```
##### Unwind will return an object like:
```javascript
	{
		"first": {"second": {"third" : "data"}},
		"second": {"third" : "data"},
		"third" : "data"
	}
```


----------


### Why flatten it this way and not move everything to the first level?
##### We found use cases in which we wanted to preserve each attribute with its associated value, but needed each subsequent value to be accessible on the first level. In particular this improves validation checking with [Smalley](https://github/ctmoses/smalley).


----------
## Examples
```javascript
	npm install -g unwind
	npm install --save unwind
	var unwind   = require('unwind'),
		yourObj  = {"first": {"second": "data"}}
	
	unwind.flatten(yourObj, function(err, results) {
		if(err)
			//handle your error...	
		else
			//do something awesome with the results...
	}); 
```

outputs
```javascript
	$meanMachine> {first: {second: data}, second: data}
```


