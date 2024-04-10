import { toAmPm } from "../src";

describe("toAmPm", () => {
  it("should be able to generate date time with pm", () => {
    const todaysDate = new Date("01/09/2024 22:03");
    const data = toAmPm(todaysDate.toString());
    expect(data.amPm).toBe("PM");
  });
  it("should be able to generate date time with am", () => {
    const todaysDate = new Date("01/09/2024 02:30");
    const data = toAmPm(todaysDate.toString());
    expect(data.amPm).toBe("AM");
  });
});
