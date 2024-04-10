import { dateBeforeDays } from "../src/date-before-days";

describe("dateBeforeDays", () => {
  it("should be able to get getDateBeforeDays with selected date-format with prevDate upto 90 days", () => {
    const todaysDate = new Date();
    const dateSeparator = "/";
    const data = dateBeforeDays(90, dateSeparator, "dmy");
    expect(data.to).toBe(
      `${todaysDate.getDate().toString().padStart(2, "0")}${dateSeparator}${(
        todaysDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}${dateSeparator}${todaysDate.getFullYear()}`
    );
  });
  it("should be able to get getDateBeforeDays with selected date-format with prevDate upto 90 days", () => {
    const todaysDate = new Date();
    const dateSeparator = "/";
    const data = dateBeforeDays(90);

    expect(data.to).toBe(
      `${todaysDate.getFullYear()}${dateSeparator}${(todaysDate.getMonth() + 1)
        .toString()
        .padStart(
          2,
          "0"
        )}${dateSeparator}${todaysDate.getDate().toString().padStart(2, "0")}`
    );
  });
  it("should be able to get getDateBeforeDays with selected date-format when prev date is sent", () => {
    const date = new Date();
    const daysToGetBefore = 30;
    const prevDate = new Date(
      new Date().setDate(date.getDate() - daysToGetBefore)
    );

    const dateSeparator = "/";
    const data = dateBeforeDays(daysToGetBefore, dateSeparator, "dmy");

    expect(data.from).toBe(
      `${prevDate.getDate().toString().padStart(2, "0")}${dateSeparator}${(
        prevDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}${dateSeparator}${prevDate.getFullYear()}`
    );
  });

  it("should be able to get getDateBeforeDays with showTime", () => {
    const todaysDate = new Date();
    const dateSeparator = "/";
    const data = dateBeforeDays(undefined, dateSeparator, "ymd", true);

    expect(data.to).toBe(
      `${todaysDate.getFullYear()}${dateSeparator}${(todaysDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}${dateSeparator}${todaysDate
        .getDate()
        .toString()
        .padStart(
          2,
          "0"
        )}T${todaysDate.getHours().toString().padStart(2, "0")}:${todaysDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`
    );
  });
  it("should be able to get empty values as days sent as negative", () => {
    const data = dateBeforeDays(-1, "/", "dmy");
    expect(data.from).toBe("");
  });
});
