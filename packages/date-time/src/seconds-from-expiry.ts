/**
 *
 * @param expiry - seconds to expiry
 * @param shouldRound - should round the return value
 * @returns total seconds from expiry
 */
export const secondsFromExpiry = (
  expiry: number,
  shouldRound: boolean
): number => {
  const now = new Date().getTime();
  const milliSecondsDistance = expiry - now;
  if (milliSecondsDistance > 0) {
    const val = milliSecondsDistance / 1000;
    return shouldRound ? Math.round(val) : val;
  }
  return 0;
};
