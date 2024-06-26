import type { DateTypes } from "./types/common";

export const getHours = (date?: DateTypes): number => {
  return (date ? new Date(date) : new Date()).getHours();
};

export const getMinutes = (date?: DateTypes): number => {
  return (date ? new Date(date) : new Date()).getMinutes();
};

export const getSeconds = (date?: DateTypes): number => {
  return (date ? new Date(date) : new Date()).getSeconds();
};
