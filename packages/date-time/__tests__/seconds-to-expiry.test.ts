import { secondsToExpiry } from "../src";

describe("secondsToExpiry", () => {
  it("should be able to getseconds before expiry", () => {
    const data = secondsToExpiry(10, false);
    expect(typeof data).toBe("number");
  });
  it("should be able to getseconds before expiry", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const expiry = tomorrow.getTime();
    const data = secondsToExpiry(expiry, false);
    expect(typeof data).toBe("number");
  });
  it("should be able to getseconds before expiry and round off", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const expiry = tomorrow.getTime();
    const data = secondsToExpiry(expiry, true);
    expect(typeof data).toBe("number");
  });
});
