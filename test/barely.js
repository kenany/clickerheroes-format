'use strict';

const test = require('tape');
const format = require('../');

test('does not round up', function(t) {
  const LEGEND = [
    [3999999999, '3,999M']
  ];

  t.plan(LEGEND.length);

  LEGEND.forEach(function(l) {
    t.equal(format(l[0]), l[1]);
  });
});
