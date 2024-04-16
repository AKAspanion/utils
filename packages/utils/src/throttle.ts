export function throttle<T extends (...args: Parameters<T>) => R, R>(
  callback: T,
  delay = 300,
  options: ThrottleOptions = {},
): [(...args: Parameters<T>) => R | undefined, () => void] {
  const {
    noTrailing = false,
    noLeading = false,
    debounceMode = undefined,
  } = options;

  let lastExec = 0;
  let cancelled = false;
  let timeout: ReturnType<typeof setTimeout> | undefined;

  function clearExistingTimeout(): void {
    if (timeout) {
      clearTimeout(timeout);
    }
  }

  // Function to cancel next exec
  function cancel(): void {
    const { upcomingOnly = false } = {};
    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }

  return [
    (...args: Parameters<T>) => {
      let val;
      const elapsed = Date.now() - lastExec;

      if (cancelled) return undefined;
      // if (wait) return undefined;

      function exec(): void {
        lastExec = Date.now();
        val = callback(...args);
      }

      function clear(): void {
        timeout = undefined;
      }

      if (!noLeading && debounceMode && !timeout) {
        exec();
      }

      clearExistingTimeout();

      if (debounceMode === undefined && elapsed > delay) {
        if (noLeading) {
          lastExec = Date.now();
          if (!noTrailing) {
            timeout = setTimeout(exec, delay);
          }
        } else {
          exec();
        }
      } else if (!noTrailing) {
        timeout = setTimeout(
          debounceMode ? clear : exec,
          debounceMode === undefined ? delay - elapsed : delay,
        );
      }
      return val;
    },
    cancel,
  ];
}

export type ThrottleOptions = {
  noLeading?: boolean;
  noTrailing?: boolean;
  debounceMode?: boolean;
};
