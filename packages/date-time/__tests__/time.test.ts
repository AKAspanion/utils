import { getHours, getMinutes, getSeconds } from "../src/time";

describe("time", () => {
  it("should get seconds", () => {
    const todaysDate = new Date("01/09/2024 02:30:23");
    const seconds = getSeconds(todaysDate.toString());
    expect(getSeconds()).toBe("number");
    expect(seconds).toBe(23);
  });
  it("should get minutes", () => {
    const todaysDate = new Date("01/09/2024 02:30:23");
    const minutes = getMinutes(todaysDate.toString());
    expect(getMinutes()).toBe("number");
    expect(minutes).toBe(20);
  });
  it("should get hours", () => {
    const todaysDate = new Date("01/09/2024 02:30:23");
    const hours = getHours(todaysDate.toString());
    expect(getHours()).toBe("number");
    expect(hours).toBe(2);
  });
});
