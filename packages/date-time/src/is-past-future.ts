import type { DateTypes, CompareDateTimeType } from "./types/common";

/**
 * Get if date is past or future
 * @param value - value of date
 * @param restrictDateTime - for past or future
 * @returns true/false
 */
export const isPastFuture = (
  value: DateTypes,
  restrictDateTime: CompareDateTimeType
): boolean => {
  const date = new Date(value);
  const selectedValue = date.getTime();
  const currentTime = new Date().getTime();
  if (restrictDateTime === "PAST") {
    if (selectedValue < currentTime) {
      return false;
    }
    return true;
  }

  if (selectedValue > currentTime) {
    return false;
  }
  return true;
};
