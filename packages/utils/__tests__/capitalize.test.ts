import { capitalize } from "../src";

describe("capitalize", () => {
  it("capitalize - upper", () => {
    expect(capitalize("JOHN")).toEqual("John");
  });

  it("capitalize - lower", () => {
    expect(capitalize("doe")).toEqual("Doe");
  });
});
