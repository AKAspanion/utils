import { act, renderHook } from "@testing-library/react";
import { useForceUpdate } from "../src";

describe("useForceUpdate", () => {
  it("return force update", () => {
    const { result } = renderHook(() => useForceUpdate());
    act(() => {
      result.current();
    });
    expect(typeof result.current).toBe("function");
  });
});
