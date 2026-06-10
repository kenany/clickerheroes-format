import humanize from 'humanize-number';

const UNITS = 'KMBTqQsSONdUD!@#$%^&*';

/**
 * Formats a number using the same abbreviated unit suffixes that Clicker Heroes
 * uses. Numbers exceeding the available units fall back to exponential
 * notation.
 *
 * @param n The number to format
 * @returns The formatted string with an appropriate unit suffix
 */
export function format(n: number): string {
  if (!n) {
    return '0';
  }

  const original = n;
  const sign = Math.abs(n) / n;
  n = Math.abs(n);

  let p = 0;

  const exponential = n.toExponential().split('e+');
  let power = +exponential[1];

  while (power >= 5) {
    power -= 3;
    p++;
  }

  n = +exponential[0] * 10 ** power;

  let str = humanize(Math.floor(n));

  if (p > UNITS.length) {
    return original.toExponential(3).replace('+', '');
  }

  if (p) {
    str += UNITS.charAt(p - 1);
  }

  return sign < 0 ? `-${str}` : str;
}
