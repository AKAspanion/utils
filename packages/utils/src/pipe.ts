/* eslint-disable @typescript-eslint/no-unsafe-return -- required */
import type { AnyArray, Anything } from "./types/common";

/**
 * Pipe multiple functions one after another
 * @param arg - input argument
 * @param fns - functions as arguments
 * @returns the computed result after operations
 */
export const pipe = <FirstFn extends AnyFunc, F extends AnyFunc[]>(
  arg: Parameters<FirstFn>[0],
  ...fns: PipeArgs<F> extends F ? F : PipeArgs<F>
): LastFnReturnType<F, ReturnType<FirstFn>> => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- any is required
  return fns.slice(1).reduce((acc, fn) => fn(acc), fns[0]?.(arg));
};

export type AnyFunc = (...arg: Anything) => Anything;

export type LastFnReturnType<F extends AnyFunc[], Else = never> = F extends [
  ...AnyArray,
  (...arg: Anything) => infer R,
]
  ? R
  : Else;

export type PipeArgs<
  F extends AnyFunc[],
  Acc extends AnyFunc[] = [],
> = F extends [(...args: infer A) => infer B]
  ? [...Acc, (...args: A) => B]
  : F extends [(...args: infer A) => Anything, ...infer Tail]
    ? Tail extends [(arg: infer B) => Anything, ...AnyArray]
      ? PipeArgs<Tail, [...Acc, (...args: A) => B]>
      : Acc
    : Acc;
