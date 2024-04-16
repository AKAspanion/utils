import { debounce, throttle } from "../src";

jest.useFakeTimers();

describe("debounce", () => {
  let count = 0;
  let func: jest.Mock;
  let debouncedFunc: () => void;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(() => {
      count++;
      func();
    }, 1000);
  });

  it("should execute just once", () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
      count++;
    }

    jest.runAllTimers();

    expect(count).toEqual(101);
    expect(func).toHaveBeenCalledTimes(1);
  });
});

describe("debounce mode from throttle", () => {
  let count = 0;
  let func: jest.Mock;
  let debouncedFunc: () => void;

  beforeEach(() => {
    func = jest.fn();
    const [df] = throttle(
      () => {
        count++;
        func();
      },
      1000,
      { debounceMode: true },
    );
    debouncedFunc = df;
  });

  it("should execute just once", () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
      count++;
    }

    jest.runAllTimers();

    expect(count).toEqual(101);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
