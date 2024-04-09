import type { RefObject } from "react";
import { useEffect, useRef } from "react";

/**
 * Binds an event listener to the document or specified element
 * @param eventName - event name/key
 * @param handler - callback function to handle the event
 * @param options - event handler options
 * @param element - element to which the handler is applied
 * @example
 * ```ts
 * useEventListener("click", () => {
 *  console.log("clicked");
 * });
 * ```
 */
const useEventListener = <T extends HTMLElement = HTMLDivElement>(
  eventName: keyof WindowEventMap,
  handler: (event: Event) => void,
  options?: boolean | AddEventListenerOptions,
  element?: RefObject<T>
): void => {
  const savedHandler = useRef<(event: Event) => void>();

  useEffect(() => {
    const targetElement: T | HTMLElement | undefined =
      element?.current || document.documentElement;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- required
    if (!targetElement?.addEventListener) {
      return;
    }

    if (savedHandler.current !== handler) {
      savedHandler.current = handler;
    }

    const eventListener = (event: Event): void => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    targetElement.addEventListener(eventName, eventListener, options);

    return () => {
      targetElement.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, element, options, handler]);
};

export default useEventListener;
