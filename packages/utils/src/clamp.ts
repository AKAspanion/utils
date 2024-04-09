/**
 * Clamps number within the inclusive lower and upper bounds.
 * @param number - number to check
 * @param lowerBound - lower bound
 * @param upperBound - upper bound
 * @returns clamped number
 * @example
 * ```ts
 * clamp(-10, -5, 5);
 * // => -5
 * clamp(10, -5, 5);
 * // => 5
 * ```
 */
export const clamp = (
  number: number,
  lowerBound: number,
  upperBound: number
) => {
  if (!upperBound) {
    return Math.max(number, lowerBound) === lowerBound ? number : lowerBound;
  } else if (Math.min(number, lowerBound) === number) {
    return lowerBound;
  } else if (Math.max(number, upperBound) === number) {
    return upperBound;
  }
  return number;
};
