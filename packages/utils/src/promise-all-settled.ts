import type { Anything } from "./types/common";

export const promiseAllSettled = (promises: Promise<Anything>[]) => {
  const mappedPromises = promises.map((p) => {
    return p
      .then((value) => ({ status: "fulfilled", value }))
      .catch((reason) => ({ status: "rejected", reason }));
  });
  return Promise.all(mappedPromises);
};
