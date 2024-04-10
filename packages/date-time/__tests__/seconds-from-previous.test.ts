import { secondsFromPrevious } from "../src";

describe("secondsFromPrevious", () => {
  it("should be able to getseconds from prev time", () => {
    const data = secondsFromPrevious(10, false);
    expect(typeof data).toBe("number");
  });
  it("should be able to getseconds from prev time and roundoff", () => {
    const data = secondsFromPrevious(10, true);
    expect(typeof data).toBe("number");
  });
  it("should be able to getseconds from prev time", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const prevTime = tomorrow.getTime();
    const data = secondsFromPrevious(prevTime, false);
    expect(typeof data).toBe("number");
  });
});
