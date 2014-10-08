var UNITS = 'KMBTqQsSONdUD!@#$%^&*';

function format(n) {

  // If `n === 0` (evaluates to `false` so we `!n` below) then just return 0
  // now. Otherwise, we will get a divide-by-zero error below when we get the
  // the sign of `n`.
  if (!n) {
    return '0';
  }

  var original = n;

  // Get the sign of `n` for adding it back later
  var sign = Math.abs(n) / n;
  n = Math.abs(n);

  var p = 0;

  while (n >= 1e5) {
    n /= 1e3;
    p++

    // Fix for n = 1e23, 1e29, and 1e59, which round weirdly into a ton of 9's
    // instead of 0's and 1's like the other numbers. We might be losing
    // precision due to this rounding.
    n = Math.round(n);
  }

  // Introduce the original sign before converting to a _String_
  n *= sign;

  var str = n.toLocaleString();

  if (p > UNITS.length) {
    return original.toExponential(3).replace('+', '');
  }

  if (p) {
    str += UNITS.charAt(p - 1);
  }

  return str;
}

module.exports = format;