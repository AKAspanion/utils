import { act, renderHook } from "@testing-library/react";
import { useLocalSearch } from "../src";

describe("useLocalSearch", () => {
  it("return search results for various records", () => {
    const items = [
      "testValue1",
      "testValue2",
      "testValue3",
      "demoValue1",
      "demoValue2",
    ];
    const { result } = renderHook(() => {
      return useLocalSearch(items);
    });
    expect(result.current.results).toBe(items);
    act(() => {
      result.current.handleChange("test");
    });
    const array = ["testValue1", "testValue2", "testValue3"];
    expect(result.current.results).toStrictEqual(array);
  });
  it("return search results for 0 records", () => {
    const items: string[] = [];
    const { result } = renderHook(() => {
      return useLocalSearch(items);
    });
    expect(result.current.results).toStrictEqual([]);
  });
  it("return if filtered recors are 0", () => {
    const items = [
      "testValue1",
      "testValue2",
      "testValue3",
      "demoValue1",
      "demoValue2",
    ];
    const { result } = renderHook(() => {
      return useLocalSearch(items);
    });
    expect(result.current.results.length).toBe(items.length);
    act(() => {
      result.current.handleChange("1");
    });
    expect(result.current.results.length).toStrictEqual(2);
  });
});
