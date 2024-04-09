import type { KeyboardEvent } from "react";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

type KeyboardMetaKeys = "ALT" | "SHIFT" | "CTRL";

/**
 * Listen to keyboard events
 * @param callback - called on key press event
 * @param keys - keyboard keys that activate the callback
 * @param metaKeys - keyboard meta keys to use
 * @param node - element to which the listener is applied 
 * @example
 * ```ts
 * // Prints "press" on press of a "a+Ctrl"
 * useKeyPress(() => console.log("press"), ["a"], ["CTRL"]);
 * ```
 */
const useKeyPress = (
  callback: (e: KeyboardEvent) => void,
  keys: string[],
  metaKeys: KeyboardMetaKeys[] = [],
  node: HTMLElement | null = null
): void => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  const isMetaKeysSatisfied = useCallback(
    (event: KeyboardEvent) => {
      return (
        metaKeys
          .map((k) => {
            switch (k) {
              case "ALT":
                return event.altKey;
              case "SHIFT":
                return event.shiftKey;
              case "CTRL":
                return event.ctrlKey || event.metaKey;
              default:
                return false;
            }
          })
          .filter((s) => !s).length === 0
      );
    },
    [metaKeys]
  );

  const handleKeyPress = useCallback(
    (e: unknown) => {
      const event = e as KeyboardEvent;
      const eventKey = String(event.key).toUpperCase();
      if (
        isMetaKeysSatisfied(event) &&
        keys.some((key) => eventKey === key.toUpperCase())
      ) {
        callbackRef.current(event);
      }
    },
    [isMetaKeysSatisfied, keys]
  );

  useEffect(() => {
    const targetNode = node ?? document;
    targetNode.addEventListener("keydown", handleKeyPress);

    return () => {
      targetNode.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress, node]);
};

export default useKeyPress;
