import { times, timesNumber } from "../src";

describe("times", () => {
  it("times - should generate array", () => {
    expect(times(4, (_, i) => i * 10)).toEqual([0, 10, 20, 30]);
  });

  it("timesNumber - should generate array of numbers", () => {
    expect(timesNumber(4)).toEqual([0, 1, 2, 3]);
  });
});
