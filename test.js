// Unit tests. Run with mocha.

/*global describe:true it:true */


var should = require('should')
  , makeUrl = require('./index')
  ;

function runTestArray(tests) {
  tests.forEach(function(test) {
    it(test.description, function() {
      var actual = makeUrl(test.config);
      if (!test.expected) {
        should.not.exist(actual);
      } else {
        actual.should.equal(test.expected);
      }
    });
  });
}

describe('mongo-make-url', function() {

  describe('basic tests', function() {
    runTestArray(require('./tests/basic.json'));
  });

  describe('gotchas (edge cases)', function() {
    runTestArray(require('./tests/gotchas.json'));
  });

  describe('replica sets', function() {
    runTestArray(require('./tests/replSet.json'));
  });

});
