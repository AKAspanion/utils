import { renderHook, act } from "@testing-library/react";
import { useIdle } from "../src";

jest.useFakeTimers();
describe("useIdle", () => {
  it("should return the initial state correctly", () => {
    const { result } = renderHook(() => useIdle(60 * 1000, true));
    expect(result.current).toBe(true);
  });

  it("should set the state to true after the specified idle time", () => {
    const { result } = renderHook(() => useIdle());
    act(() => {
      jest.advanceTimersByTime(60 * 1000);
    });
    expect(result.current).toBe(true);
  });
  it("should set state to false after user activity", () => {
    const { result } = renderHook(() => useIdle(1000, false));
    act(() => {
      jest.advanceTimersByTime(500);
      document.dispatchEvent(new Event("mousemove"));
    });
    expect(result.current).toBe(false);
  });

  it("should change the state when document visibility changes", () => {
    const { result } = renderHook(() => useIdle(3000, true));
    act(() => {
      Object.defineProperty(document, "hidden", {
        value: false,
      });
      document.dispatchEvent(new Event("visibilitychange"));
    });
    expect(result.current).toBe(false);
  });
});
