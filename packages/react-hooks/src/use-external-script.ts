import { useEffect, useState } from "react";

/**
 * Loads an external/remote script
 * @param url - source url of the script to load
 * @returns state of the stript
 * @example
 * ```ts
 * useExternalScript("https://code.jquery.com/jquery-3.3.1.slim.min.js");
 * ```
 */
const useExternalScript = (url?: string): string => {
  const [state, setState] = useState(url ? "loading" : "idle");

  useEffect(() => {
    if (!url) {
      setState("idle");
      return;
    }

    let script = document.querySelector(`script[src="${url}"]`);

    const handleScript = (e: Event): void => {
      setState(e.type === "load" ? "ready" : "error");
    };

    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/javascript");
      script.setAttribute("src", url);
      script.setAttribute("async", "true");
      document.body.appendChild(script);

      script.addEventListener("load", handleScript);
      script.addEventListener("error", handleScript);
    }

    // script.addEventListener('load', handleScript);
    // script.addEventListener('error', handleScript);

    return () => {
      if (script) {
        script.removeEventListener("load", handleScript);
        script.removeEventListener("error", handleScript);
      }
    };
  }, [url]);

  return state;
};

export default useExternalScript;
