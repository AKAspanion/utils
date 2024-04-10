import { inRange } from "../src";

describe("in-range", () => {
  it("inRange - positive", () => {
    expect(inRange(3, 2, 4)).toEqual(true);
  });
  it("inRange - negative", () => {
    expect(inRange(-3, -2, -6)).toEqual(true);
  });
  it("inRange - no end", () => {
    expect(inRange(-3, -2)).toEqual(false);
  });
});
