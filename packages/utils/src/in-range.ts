/**
 * Checks if n is between start and up to, but not including, end.
 * @param num - number to check
 * @param start - range start
 * @param end - range end
 * @returns true/false
 * @example
 * ```ts
 * inRange(3, 2, 4);
 * // output: true
 * inRange(-3, -2, -6);
 * // output: true
 * ```
 */
export const inRange = (num: number, start: number, end = 0): boolean =>
  Math.min(start, end) <= num && num < Math.max(start, end);
