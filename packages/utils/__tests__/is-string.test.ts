import { isString } from "../src";

describe("is-string", () => {
  it("isString - positive", () => {
    expect(isString("123")).toEqual(true);
  });

  it("isString - negative", () => {
    expect(isString(123)).toEqual(false);
  });
});
