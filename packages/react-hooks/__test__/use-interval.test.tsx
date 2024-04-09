import { renderHook } from "@testing-library/react";
import { useInterval } from "../src";

jest.useFakeTimers();
describe("useInterval", () => {
  it("should return the initial state correctly", () => {
    const fn = jest.fn();
    renderHook(() => {
      useInterval(fn, 3000);
    });
    jest.advanceTimersByTime(3000);

    expect(fn).toBeCalled();
  });
  it("no delay passed", () => {
    const fn = jest.fn();
    renderHook(() => {
      useInterval(fn);
    });
    jest.advanceTimersByTime(3000);
    expect(fn).not.toBeCalled();
  });
});
