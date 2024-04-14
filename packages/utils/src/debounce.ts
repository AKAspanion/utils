/**
 * Convert a function call to debounced function call
 * @param callback - function to call
 * @param delay - delay in debounce
 * @returns debounced function
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
  callback: T,
  delay = 300
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
