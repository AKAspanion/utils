import type { DateFormatType, SeparatorType } from "./types/common";

/**
 * Gives date before a certain number of days in the given format
 * @param days - number of days
 * @param dateSeparator - separator for the date
 * @param dateFormat - format of date `ymd | dmy`
 * @param time - append time to the date
 * @returns to date and from date in the given format
 */
export const dateBeforeDays = (
  days = 90,
  dateSeparator: SeparatorType = "/",
  dateFormat: DateFormatType = "ymd",
  time = false
): { to: string; from: string } => {
  const date = new Date();
  let toDate = "";
  let prevDate = date;
  let fromDate = "";

  try {
    if (days < 0) {
      throw new Error("Days Cannot be negative");
    } else if (dateFormat === "dmy") {
      toDate = `${date.getDate().toString().padStart(2, "0")}${dateSeparator}${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}${dateSeparator}${date.getFullYear()}`;

      prevDate = new Date(new Date().setDate(date.getDate() - days));

      fromDate = `${prevDate.getDate().toString().padStart(2, "0")}${dateSeparator}${(
        prevDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}${dateSeparator}${prevDate.getFullYear()}`;
    } else {
      toDate = `${date.getFullYear()}${dateSeparator}${(date.getMonth() + 1)
        .toString()
        .padStart(
          2,
          "0"
        )}${dateSeparator}${date.getDate().toString().padStart(2, "0")}`;

      prevDate = new Date(new Date().setDate(date.getDate() - days));

      fromDate = `${prevDate.getFullYear()}${dateSeparator}${(
        prevDate.getMonth() + 1
      )
        .toString()
        .padStart(
          2,
          "0"
        )}${dateSeparator}${prevDate.getDate().toString().padStart(2, "0")}`;
    }

    if (time) {
      const hours = String(date.getHours()).padStart(2, "0");
      const mins = String(date.getMinutes()).padStart(2, "0");

      toDate = `${toDate}T${hours}:${mins}`;
      fromDate = `${fromDate}T${hours}:${mins}`;
    }

    return { to: toDate, from: fromDate };
  } catch (error) {
    return { to: "", from: "" };
  }
};
