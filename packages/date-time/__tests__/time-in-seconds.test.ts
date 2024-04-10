import { timeInSeconds } from "../src";

describe("timeInSeconds", () => {
  it("should be able to get time from seconds", () => {
    const data = timeInSeconds(10);
    expect(typeof data.second).toBe("number");
  });
});
