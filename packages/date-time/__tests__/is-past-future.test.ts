import { isPastFuture } from "../src";

describe("isPastFuture", () => {
  it("should be able to check if date is past", () => {
    const todaysDate = new Date();
    const d = new Date(todaysDate.setDate(todaysDate.getDate() - 1));
    const v = isPastFuture(d, "PAST");
    expect(v).toBe(false);
  });
  it("should be able to check if date is past with date type", () => {
    const todaysDate = new Date();
    const d = new Date(todaysDate.setDate(todaysDate.getDate() + 1));
    const v = isPastFuture(d, "PAST");
    expect(v).toBe(true);
  });
  it("should be able to check if date is future", () => {
    const todaysDate = new Date();
    const d = new Date(todaysDate.setDate(todaysDate.getDate() + 1));
    const v = isPastFuture(d, "FUTURE");
    expect(v).toBe(false);
  });
  it("should be able to check if date is future with date type", () => {
    const todaysDate = new Date();
    const d = new Date(todaysDate.setDate(todaysDate.getDate() - 1));
    const v = isPastFuture(d, "FUTURE");
    expect(v).toBe(true);
  });
});
