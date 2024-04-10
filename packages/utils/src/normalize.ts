/**
 *
 * @param value - any value
 * @param fallback - fallback string for invalid values
 * @returns normalized string
 */
export const normalize = (
  value?: string | number | object | null,
  fallback = "-"
): string =>
  value === "" ||
  value === undefined ||
  value === null ||
  typeof value === "object"
    ? fallback
    : String(value);
