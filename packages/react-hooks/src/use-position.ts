import { useCallback, useState } from "react";
import useEventListener from "./use-event-listener";

export type PositionType = {
  left?: string;
  right?: string;
};

export type PositionOptions = {
  offsetY?: number;
  offsetX?: number;
  right?: boolean;
};

/**
 * Determines the position of a given element relative to a parent
 * @param parent - parent element
 * @param options - Position options
 * @returns - dimensions object, and positionElement function
 * @example
 * ```ts
 * const { dimensions } = usePosition(document.documentElement);
 * ```
 */
const usePosition = <T extends HTMLElement = HTMLDivElement>(
  parent: React.RefObject<T>,
  options?: PositionOptions
): { dimensions: React.CSSProperties; positionElement: () => void } => {
  const [dimensions, setDimensions] = useState<React.CSSProperties>({});

  const positionElement = useCallback(() => {
    if (parent.current) {
      const {
        offsetY = 4,
        offsetX = 0,
        right: rightFlag = false,
      } = options || {};
      const { width, top, left, right, height } =
        parent.current.getBoundingClientRect();

      const pos: PositionType = {};

      if (rightFlag) {
        const screenWidth =
          document.documentElement.clientWidth || document.body.clientWidth;
        pos.right = `${screenWidth - right + offsetX}px`;
      } else {
        pos.left = `${left + offsetX}px`;
      }

      setDimensions(() => ({
        ...pos,
        width: `${width}px`,
        transform: `translate3d(0px, ${top + height + offsetY}px, 0px)`,
      }));
    }
  }, [parent, options]);

  useEventListener("resize", positionElement);
  useEventListener("scroll", positionElement, true, undefined);

  return { dimensions, positionElement };
};

export default usePosition;
