import { useEffect, useState } from "react";
import { off, on } from "./utils/dom";

const events = [
  "mousemove",
  "mousedown",
  "resize",
  "keydown",
  "touchstart",
  "wheel",
];
const oneMinute = 60e3;

/**
 * Returns a flag when idle for the specified time duration
 * @param ms - time in milliseconds
 * @param initialState - initial state for idle
 * @returns the idle state, true/false
 * @example
 * ```ts
 * const state = useIdle();
 * // Prints false, true after 1 minute
 * console.log(state);
 * ```
 */
const useIdle = (ms: number = oneMinute, initialState = false): boolean => {
  const [state, setState] = useState<boolean>(initialState);

  useEffect(() => {
    let mounted = true;
    let timeout: NodeJS.Timeout;
    let localState: boolean = state;
    const set = (newState: boolean): void => {
      if (mounted) {
        localState = newState;
        setState(newState);
      }
    };

    const onEvent = (): void => {
      if (localState) {
        set(false);
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        set(true);
      }, ms);
    };

    const onVisibility = (): void => {
      if (!document.hidden) {
        onEvent();
      }
    };

    for (const event of events) {
      on(window, event, onEvent);
    }
    on(document, "visibilitychange", onVisibility);

    timeout = setTimeout(() => {
      set(true);
    }, ms);

    return () => {
      mounted = false;

      for (const event of events) {
        off(window, event, onEvent);
      }
      off(document, "visibilitychange", onVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- required
  }, [ms, events]);

  return state;
};

export default useIdle;
