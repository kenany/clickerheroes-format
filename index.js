'use strict';

const humanize = require('humanize-number');

const UNITS = 'KMBTqQsSONdUD!@#$%^&*';

/**
 * @param {number} n
 * @returns {string}
 */
function format(n) {
  // If `n === 0` (evaluates to `false` so we `!n` below) then just return 0
  // now. Otherwise, we will get a divide-by-zero error below when we get the
  // the sign of `n`.
  if (!n) {
    return '0';
  }

  const original = n;

  // Get the sign of `n` for adding it back later
  const sign = Math.abs(n) / n;
  n = Math.abs(n);

  let p = 0;

  const exponential = n.toExponential().split('e+');
  let power = exponential[1];
  power = +power;

  while (power >= 5) {
    power -= 3;
    p++;
  }

  // Reconstruct `n` but use reduced power (because a higher value unit is going
  // to be attached to it). Also reintroduce its sign.
  n = sign * exponential[0] * Math.pow(10, power);

  let str = humanize(Math.floor(n));

  if (p > UNITS.length) {
    return original.toExponential(3).replace('+', '');
  }

  if (p) {
    str += UNITS.charAt(p - 1);
  }

  return str;
}

module.exports = format;
