import { diffInDays } from "../src";

describe("diffInDays", () => {
  it("should be able to get diff in days", () => {
    const data = diffInDays("02-01-2023", "02-08-2023");
    expect(data).toBe(7);
  });

  it("should be able to trigger default return ", () => {
    const data = diffInDays("", "");
    expect(data).toBe(0);
  });
});
