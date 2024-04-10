/**
 * Converts the first character of string to upper case and the remaining to lower case.
 * @param string - string to convert
 * @returns capitalized string
 * @example
 * ```ts
 * const result = capitalize('JOHN');
 * console.log(result);
 * // => 'John'
 * ```
 */
export const capitalize = (string: string): string => {
  return string
    ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    : "";
};
