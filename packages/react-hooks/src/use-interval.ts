"use client";
/* eslint-disable @typescript-eslint/no-empty-function -- required*/
import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay?: number): void => {
  const callbackRef = useRef(() => {});

  // update callback function with current render callback that has access to latest props and state
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    if (!delay) {
      return () => {};
    }

    const interval = setInterval(() => {
      callbackRef.current();
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay]);
};

export default useInterval;
