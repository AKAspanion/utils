/**
 * Recursively flattens array to single level.
 * @param arr - deep nested array
 * @returns
 */
export const flattenArray = <T>(
  arr: NestedArray<T>,
  level = Infinity
): NestedArray<T> =>
  level >= 0 && Array.isArray(arr)
    ? arr.reduce((a, b) => {
        return Array.isArray(a) ? a.concat(flattenArray(b, level - 1)) : [];
      }, [])
    : [arr];

type NestedArray<T> = T | NestedArray<T>[];
