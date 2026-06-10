import { format } from 'clickerheroes-format';
import { describe, expect, it } from 'vitest';

describe('format', () => {
  it('follows legend of large numbers', () => {
    const legend: [number, string][] = [
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
      [1e65, '100*'],
    ];

    for (const [input, expected] of legend) {
      expect(format(input)).toBe(expected);
    }
  });

  it('returns 0 on 0', () => {
    expect(format(0)).toBe('0');
  });

  it('does not round up', () => {
    expect(format(3_999_999_999)).toBe('3,999M');
  });

  it('preserves negative sign', () => {
    const legend: [number, string][] = [
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
      [1e65, '100*'],
    ];

    for (const [input, expected] of legend) {
      expect(format(-input)).toBe(`-${expected}`);
    }
  });
});
