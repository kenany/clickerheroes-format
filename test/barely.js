var format = require('../');
var test = require('tape');

test('does not round up', function(t) {
  var LEGEND = [
    [3999999999, '3,999M']
  ];

  t.plan(LEGEND.length);

  LEGEND.forEach(function(l) {
    t.equal(format(l[0]), l[1]);
  });
});