import { normalize } from "../src";

describe("normalize", () => {
  it("should be able to get normalized value", () => {
    const data = normalize("test_value");
    expect(data).toBe("test_value");
  });
  it("should be able to get normalized value when value is undefined", () => {
    const data = normalize(undefined);
    expect(data).toBe("-");
  });
  it("should be able to get normalized value when value is null", () => {
    const data = normalize(null);
    expect(data).toBe("-");
  });
  it("should be able to get normalized value when value is an object", () => {
    const data = normalize({});
    expect(data).toBe("-");
  });
});
