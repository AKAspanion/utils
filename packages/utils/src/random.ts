/**
 * Generates a random floating-point number
 * @param start - start number
 * @param end - end number
 * @returns a floating-point number between given start and end
 * @example
 * ```ts
 * random(0, 5);
 * // => a floating-point number between 0 and 5
 * ```
 */
export const random = (start = 1, end = 0): number => {
  const lower = Math.min(start, end);
  const upper = Math.max(start, end);
  return lower + Math.random() * (upper - lower);
};

/**
 * Generates a random integer
 * @param start - start number
 * @param end - end number
 * @returns an integer between given start and end
 * @example
 * ```ts
 * randomInt(1.2, 5.2);
 * // => an integer between 2 and 5
 * ```
 */
export const randomInt = (start = 1, end = 0): number => {
  const lower = Math.ceil(Math.min(start, end));
  const upper = Math.floor(Math.max(start, end));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
