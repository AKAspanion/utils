import { format } from "../src/date";

jest.spyOn(global.console, "log");

describe("date", () => {
  it("formats a date", () => {
    format("12-25-1995");
    // TODO
  });
});
