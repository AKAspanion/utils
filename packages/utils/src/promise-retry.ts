/**
 * Retry a promise until conditions are met
 * @param operation - promise function
 * @param delay - retry after
 * @param times - retry number of times
 * @returns value of promise or retries on failure
 */
export const promiseRetry = async <T>(
  operation: () => Promise<T> | T,
  delay: number,
  times: number,
): Promise<T> => {
  try {
    return await operation();
  } catch (ex) {
    if (times > 1) {
      await new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
      return promiseRetry(operation, delay, times - 1);
    }
    throw ex;
  }
};
