'use strict';

const test = require('tape');
const format = require('../');

test('preserves negative sign', function(t) {
  const LEGEND = [
    [1e5, '100K'],
    [1e8, '100M'],
    [1e11, '100B'],
    [1e14, '100T'],
    [1e17, '100q'],
    [1e20, '100Q'],
    [1e23, '100s'],
    [1e26, '100S'],
    [1e29, '100O'],
    [1e32, '100N'],
    [1e35, '100d'],
    [1e38, '100U'],
    [1e41, '100D'],
    [1e44, '100!'],
    [1e47, '100@'],
    [1e50, '100#'],
    [1e53, '100$'],
    [1e56, '100%'],
    [1e59, '100^'],
    [1e62, '100&'],
    [1e65, '100*']
  ];

  t.plan(LEGEND.length);

  LEGEND.forEach(function(l) {
    t.equal(format(-l[0]), '-' + l[1]);
  });
});
