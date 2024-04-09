import { renderHook } from "@testing-library/react";
import useFirstRender from "../src/use-first-render";

describe("useFirstRender", () => {
  it("return first render value", () => {
    const { result, rerender } = renderHook(() => useFirstRender());
    expect(result.current).toBe(true);
    rerender();
    expect(result.current).toBe(false);
  });
});
