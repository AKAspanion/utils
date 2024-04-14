import type { Anything } from "./types/common";

export const promiseAllReduce = (promises: Promise<Anything>[]) => {
  return promises.reduce((accumulator, value) => {
    return accumulator.then((results: Anything) => {
      return Promise.resolve(value).then((result) => {
        return [...results, result];
      });
    });
  }, Promise.resolve([]));
};

export const promiseAllIterative = (promises: Promise<Anything>[]) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          results[index] = result;
          completed += 1;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

export const promiseAllRecursive = (
  promises: Promise<Anything>[]
): Anything => {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  const [first, ...rest] = promises;

  // Calling Promise.resolve on the first value because it could
  // be either a Promise or an actual value.
  return Promise.resolve(first).then((firstResult: Anything) => {
    return promiseAllRecursive(rest).then((restResults: Anything[]) => {
      return [firstResult, ...restResults];
    });
  });
};
