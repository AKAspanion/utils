/**
 * Get time values from seconds
 * @param seconds - seconds to convert
 * @returns day, hour, minutes, seconds
 */
export const timeInSeconds = (seconds: number): TimeFromSecondsReturnType => {
  const totalSeconds = Math.ceil(seconds);
  const day = Math.floor(totalSeconds / (60 * 60 * 24));
  const hour = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minute = Math.floor((totalSeconds % (60 * 60)) / 60);
  const second = Math.floor(totalSeconds % 60);

  return { day, hour, minute, second };
};

export type TimeFromSecondsReturnType = {
  day: number;
  hour: number;
  minute: number;
  second: number;
};
