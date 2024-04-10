import { random, randomInt } from "../src";

describe("random", () => {
  it("random - should generate random number", () => {
    expect(random(2, 4)).toBeGreaterThanOrEqual(2);
  });

  it("randomInt - should generate random number", () => {
    expect(randomInt(2, 4)).toBeGreaterThanOrEqual(2);
  });
});
