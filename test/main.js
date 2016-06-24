var assert = require('chai').assert;

var pow = require('../app/main');

describe('pow', function() {
  it('при возведении 2 в 3ю степень результат 7', function() {
	  assert.equal(pow(2, 3), 7);
  });
  it('при возведении 2 в 3ю степень результат 13', function() {
	  assert.equal(pow(3, 4), 13);
  });
});