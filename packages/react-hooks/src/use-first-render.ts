"use client";
import { useRef, useEffect } from "react";

/**
 * Return a flag indicating first render of component
 * @returns true/false 
 * @example
 * ```ts
 * const first = useFirstRender();
 * // prints true on first render
 * console.log(first);
 * ```
 */
const useFirstRender = (): boolean => {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
};

export default useFirstRender;
