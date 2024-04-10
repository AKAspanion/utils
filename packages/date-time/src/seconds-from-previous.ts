/**
 * Get seconds from previous time
 * @param prevTime - previous time
 * @param shouldRound - should round the return value
 * @returns total seconds from previous time
 */
export const secondsFromPrevious = (
  prevTime: number,
  shouldRound: boolean
): number => {
  const now = new Date().getTime();
  const milliSecondsDistance = now - prevTime;
  if (milliSecondsDistance > 0) {
    const val = milliSecondsDistance / 1000;
    return shouldRound ? Math.round(val) : val;
  }
  return 0;
};
