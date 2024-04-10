import type { DateTypes } from "./types/common";

/**
 * Get AM/PM for a given date
 * @param date - date to parse
 * @returns am/pm value along with hours, minutes, and seconds
 */
export const toAmPm = (date: DateTypes): ToAmPmReturnType => {
  const originalDate = new Date(date);
  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();
  const seconds = originalDate.getSeconds();
  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = `${hours > 12 ? hours - 12 : hours}`;
  const formattedTime = `${formattedHours}:${minutes < 10 ? "0" : ""}${minutes} ${amPm}`;
  return {
    time: formattedTime,
    hours: formattedHours,
    seconds: String(seconds).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    amPm,
  };
};

export type ToAmPmReturnType = {
  time: string;
  hours: string;
  seconds: string;
  minutes: string;
  amPm: string;
};
