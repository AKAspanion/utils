/**
 * Invokes the iteratee n times, returning an array of n numbers.
 * @param length - length of array
 * @returns processed array of integers
 */
export const timesNumber = (length: number): number[] =>
  Array.from({ length }, (_, x) => x);

/**
 * Invokes the iteratee n times, an array of the results of each invocation.
 * @param length - length of array
 * @param callback - callback to generate array item
 * @returns processed array
 */
export const times = <T>(
  length: number,
  callback: (_: unknown, x: number) => T,
): T[] => Array.from({ length }, callback);
