export type DateFormatsType = "MM-DD-YYYY" | "YYYY-MM-DD HH:mm";

export const format = (date: string, _?: DateFormatsType): Date => {
  return new Date(date);
};
