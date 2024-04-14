import { flattenArray } from "../src";

describe("flattenArray", () => {
  it("flattenArray - no level", () => {
    expect(flattenArray([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]])).toEqual([
      0, 1, 2, 3, 4, 5,
    ]);
  });
  it("flattenArray - level 2", () => {
    const data = flattenArray([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]], 2);

    expect(data).toEqual([[[0]], [1], [[2], [3]], [4], [5]]);
  });
});
