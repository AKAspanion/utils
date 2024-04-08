"use client";
import { useRef, useEffect } from "react";

const useFirstRender = (): boolean => {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
};

export default useFirstRender;
