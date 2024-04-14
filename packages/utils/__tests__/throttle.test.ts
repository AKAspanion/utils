import { throttle } from "../src";

jest.useFakeTimers();

describe("throttle", () => {
  let count = 0;
  let func: jest.Mock;
  let throttleFunc: () => void;

  beforeEach(() => {
    func = jest.fn();
    const [throttleFn] = throttle(() => {
      count++;
      func();
      return 0;
    }, 1000);
    throttleFunc = throttleFn;
  });

  it("should execute just once", () => {
    for (let i = 0; i < 100; i++) {
      throttleFunc();
      count++;
    }

    jest.runAllTimers();

    expect(count).toEqual(101);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
