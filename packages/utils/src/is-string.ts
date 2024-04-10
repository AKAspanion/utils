/**
 * Checks if value is classified as a String primitive or object
 * @param string - value to check
 * @returns true/false
 * @example
 * ```ts
 * isString('abc');
 * // => true
 * isString(123);
 * `// => false
 * ```
 */
export const isString = (string: unknown): boolean => {
  if (
    string !== null &&
    string !== undefined &&
    typeof string.valueOf() === "string"
  ) {
    return true;
  }
  return false;
};
