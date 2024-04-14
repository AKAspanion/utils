import { promiseRetry } from "../src";

describe("pipe", () => {
  let callCounter = 0;
  let testFunc: () => Promise<void>;
  beforeEach(() => {
    const getTestFunc = () => {
      // eslint-disable-next-line @typescript-eslint/require-await -- for test
      return async () => {
        callCounter += 1;
        if (callCounter < 5) {
          throw new Error("Not yet");
        }
      };
    };
    testFunc = getTestFunc();
  });
  it("should be able to pipe functions", async () => {
    await promiseRetry(testFunc, 1000, 10);

    await promiseRetry(testFunc, 1000, 3);

    expect(callCounter).toBe(6);
  });
});
