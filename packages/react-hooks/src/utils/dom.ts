import { AnySpreadParams } from "../types/common";

/* eslint-disable @typescript-eslint/ban-types -- override */
export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T["addEventListener"]>
    | [string, Function | null, ...AnySpreadParams]
): void {
  if (obj?.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement["addEventListener"]>)
    );
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T["removeEventListener"]>
    | [string, Function | null, ...AnySpreadParams]
): void {
  if (obj?.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement["removeEventListener"]>)
    );
  }
}
