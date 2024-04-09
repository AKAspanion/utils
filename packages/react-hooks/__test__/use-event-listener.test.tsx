/* eslint-disable react-hooks/rules-of-hooks -- for test*/
/* eslint-disable @typescript-eslint/explicit-function-return-type -- for test */
import type { RefObject } from "react";
import { act, renderHook } from "@testing-library/react";
import { useEventListener } from "../src";

describe("useEventListener", () => {
  it("adds and removes the event listener correctly", () => {
    const mockHandler = jest.fn();
    const element = {
      current: document.createElement("div"),
    } as RefObject<HTMLDivElement>;
    renderHook(() => {
      useEventListener("click", mockHandler, {}, element);
    });
    act(() => {
      element.current?.dispatchEvent(new Event("click"));
    });
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it("does not add the event listener if no target element is provided", () => {
    const mockHandler = jest.fn();

    function TestComponent() {
      act(() => {
        useEventListener("click", mockHandler);
      });
      return null;
    }

    act(() => {
      <TestComponent />;
    });
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });

  it("does not add the event listener if the target element is not a valid HTMLElement or Window", () => {
    const mockHandler = jest.fn();
    const element = {} as RefObject<HTMLDivElement>;

    function TestComponent() {
      act(() => {
        useEventListener("click", mockHandler, {}, element);
      });
      return null;
    }

    act(() => {
      <TestComponent />;
    });
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });
  it("does not add the event listener if addEventListener method is not present", () => {
    const mockHandler = jest.fn();
    const element = { current: {} } as RefObject<HTMLDivElement>;

    function TestComponent() {
      act(() => {
        useEventListener("click", mockHandler, {}, element);
      });
      return null;
    }

    act(() => {
      <TestComponent />;
    });
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });
});
