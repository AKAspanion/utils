import { clamp } from "../src";

describe("clamp", () => {
  it("clamp - negative", () => {
    expect(clamp(-10, -5, 5)).toEqual(-5);
  });

  it("clamp - positive", () => {
    expect(clamp(10, -5, 5)).toEqual(5);
  });
});
