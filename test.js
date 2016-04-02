var isUndefined = require('./');
var test = require('tape');


test('is undefined', function(t) {
	var testArray = {
		'test': '',
		'test2': [
			'a',
			'b'
		]
	};
	var defVar = '';

	t.ok(isUndefined(testArray.test2[2]));
	t.ok(isUndefined(testArray.test3));
	t.notOk(isUndefined(defVar));
	t.notOk(isUndefined(testArray.test));
	t.notOk(isUndefined(testArray.test2[1]));

	t.end();
});