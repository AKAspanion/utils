import { renderHook } from "@testing-library/react";
import { useExternalScript } from "../src";

describe("useExternalScript", () => {
  it("return state for a valid external script", () => {
    const { result } = renderHook(() =>
      useExternalScript("https://code.jquery.com/jquery-3.3.1.slim.min.js"),
    );

    expect(result.current).toBe("loading");
  });
  it("return state of an invalid external script", () => {
    const { result } = renderHook(() => useExternalScript());
    expect(result.current).toBe("idle");
  });
});
