import { clamp } from "../src";

describe("clamp", () => {
  it("clamp - negative", () => {
    expect(clamp(-10, -5, 5)).toEqual(-5);
  });
  it("clamp - positive", () => {
    expect(clamp(10, -5, 5)).toEqual(5);
  });
  it("clamp - no upper negative ", () => {
    expect(clamp(10, -5)).toEqual(-5);
  });
  it("clamp - no upper positive", () => {
    expect(clamp(5, 10)).toEqual(5);
  });
  it("clamp - default", () => {
    expect(clamp(3, -5, 5)).toEqual(3);
  });
});
