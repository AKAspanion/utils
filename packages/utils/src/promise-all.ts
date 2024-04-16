/* eslint-disable @typescript-eslint/no-unsafe-call -- required*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access -- required*/
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- required */
/* eslint-disable @typescript-eslint/no-unsafe-return -- required*/
import type { Anything } from "./types/common";

export const promiseAllReduce = (
  promises: Promise<Anything>[],
): Promise<Anything> => {
  return promises.reduce((accumulator, value) => {
    return accumulator.then((results: Anything) => {
      return Promise.resolve(value).then((result) => {
        return [...results, result];
      });
    });
  }, Promise.resolve([]));
};

export const promiseAllIterative = (
  promises: Promise<Anything>[],
): Promise<Anything> => {
  return new Promise((resolve, reject) => {
    const results: Anything[] = [];
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
        .catch((err) => {
          // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors -- required
          reject(err);
        });
    });
  });
};

export const promiseAllRecursive = (
  promises: Promise<Anything>[],
): Anything => {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  const [first, ...rest] = promises;

  return Promise.resolve(first).then(
    (firstResult: Anything): Promise<Anything> => {
      return promiseAllRecursive(rest).then((restResults: Anything[]) => {
        return [firstResult, ...restResults];
      });
    },
  );
};
