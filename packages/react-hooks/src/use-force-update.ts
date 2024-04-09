import { useCallback, useState } from "react";

type UseForceUpdate = () => () => void;

/**
 * Forcefully re-render a component
 * @returns callback function to force render
 * @example
 * ```ts
 * const forceUpdate = useForceUpdate();
 * ```
 */
const useForceUpdate: UseForceUpdate = () => {
  // eslint-disable-next-line react/hook-use-state -- required
  const [, setTick] = useState(0);

  return useCallback(() => {
    setTick((t) => t + 1);
  }, []);
};

export default useForceUpdate;
