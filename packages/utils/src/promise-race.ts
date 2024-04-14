import type { Anything } from "./types/common";

export const promiseRace = (promises: Promise<Anything>[]) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject).catch(reject);
    });
  });
};
