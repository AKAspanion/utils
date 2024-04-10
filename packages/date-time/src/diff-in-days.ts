import type { DateTypes } from "./types/common";

/**
 * Get difference between two timestamps in days
 * @param date1 - first date
 * @param date2 - second date
 * @returns number of days
 */
export const diffInDays = (date1: DateTypes, date2: DateTypes): number => {
  if (!date1 || !date2) return 0;
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d2.getDate() - d1.getDate();
};
