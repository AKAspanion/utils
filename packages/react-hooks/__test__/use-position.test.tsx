import { act, renderHook } from "@testing-library/react";
import { usePosition } from "../src";

describe("usePosition", () => {
  it("returns the position and dimensions of the element", () => {
    const parentRef = { current: document.createElement("div") };
    const { result, rerender } = renderHook(() =>
      usePosition(parentRef, { right: true }),
    );
    expect(result.current.dimensions).toEqual({});
    act(() => {
      result.current.positionElement();
      rerender();
    });
    expect(result.current.dimensions.right).toBe("0px");
    expect(result.current.dimensions.width).toBe("0px");
    expect(result.current.dimensions.transform).toBe(
      "translate3d(0px, 4px, 0px)",
    );
  });
  it("returns the position and dimensions of the element", () => {
    const parentRef = { current: document.createElement("div") };
    const { result, rerender } = renderHook(() => {
      return usePosition(parentRef);
    });
    expect(result.current.dimensions).toEqual({});
    act(() => {
      result.current.positionElement();
      rerender();
    });
    expect(result.current.dimensions.left).toBe("0px");
    expect(result.current.dimensions.width).toBe("0px");
    expect(result.current.dimensions.transform).toBe(
      "translate3d(0px, 4px, 0px)",
    );
  });
});
