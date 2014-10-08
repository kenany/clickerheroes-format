var format = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(format));
});

test('follows legend of large numbers', function(t) {
  var LEGEND = [
    [1e5, '100K'],
    [1e8, '100M'],
    [1e11, '100B'],
    [1e14, '100T'],
    [1e17, '100q'],
    [1e20, '100Q'],
    [1e23, '100s'], // weird rounding
    [1e26, '100S'],
    [1e29, '100O'], // weird rounding
    [1e32, '100N'],
    [1e35, '100d'],
    [1e38, '100U'],
    [1e41, '100D'],
    [1e44, '100!'],
    [1e47, '100@'],
    [1e50, '100#'],
    [1e53, '100$'],
    [1e56, '100%'],
    [1e59, '100^'], // weird rounding
    [1e62, '100&'],
    [1e65, '100*']
  ];

  t.plan(LEGEND.length);

  LEGEND.forEach(function(l) {
    t.equal(format(l[0]), l[1]);
  });
});

test('returns 0 on 0', function(t) {
  t.equal(format(0), '0');
  t.end();
});