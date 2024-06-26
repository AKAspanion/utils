/**
 * Get seconds to expiry time
 * @param expiry - seconds to expiry
 * @param shouldRound - should round the return value
 * @returns total seconds to expiry
 */
export const secondsToExpiry = (
  expiry: number,
  shouldRound: boolean,
): number => {
  const now = new Date().getTime();
  const milliSecondsDistance = expiry - now;
  if (milliSecondsDistance > 0) {
    const val = milliSecondsDistance / 1000;
    return shouldRound ? Math.round(val) : val;
  }
  return 0;
};
