import { act, renderHook } from "@testing-library/react";
import { useLocalPagination } from "../src";

describe("useLocalPagination", () => {
  it("local pagination for multiple records", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const { result } = renderHook(() => {
      return useLocalPagination<number>(array);
    });
    expect(result.current.showLoadMore).toBe(true);
    act(() => {
      result.current.loadMore();
      result.current.loadMore();
    });
    expect(result.current.computedRecords.length).toBe(array.length);
    act(() => {
      result.current.resetOffset();
    });
    expect(result.current.computedRecords.length).toBe(5);
  });
  it("return local pagination for 0 records", () => {
    const array: number[] = [];
    const { result } = renderHook(() => {
      return useLocalPagination(array);
    });
    expect(result.current.showLoadMore).toBe(false);
    expect(result.current.computedRecords.length).toBe(0);
  });
});
