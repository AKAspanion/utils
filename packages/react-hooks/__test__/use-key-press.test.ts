import { renderHook, act, fireEvent } from "@testing-library/react";
import { useKeyPress } from "../src";

type KeyboardMetaKeys = "ALT" | "SHIFT" | "CTRL";
describe("useKeyPress", () => {
  it("should call the callback when the specified keys are pressed", () => {
    const callback = jest.fn();
    const keys = ["a", "b"];
    const metaKeys: KeyboardMetaKeys[] = ["CTRL"];

    renderHook(() => {
      useKeyPress(callback, keys, metaKeys);
    });

    act(() => {
      fireEvent.keyDown(document, { key: "a", ctrlKey: true });
    });

    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      fireEvent.keyDown(document, { key: "b", ctrlKey: true });
    });

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should not call the callback when other keys are pressed", () => {
    const callback = jest.fn();
    const keys = ["a", "b"];
    const metaKeys: KeyboardMetaKeys[] = ["CTRL"];

    renderHook(() => {
      useKeyPress(callback, keys, metaKeys);
    });

    act(() => {
      fireEvent.keyDown(document, { key: "c", ctrlKey: true });
    });

    expect(callback).not.toHaveBeenCalled();
  });

  it("should call the callback when the specified keys are pressed without metaKeys", () => {
    const callback = jest.fn();
    const keys = ["a", "b"];

    renderHook(() => {
      useKeyPress(callback, keys);
    });

    act(() => {
      fireEvent.keyDown(document, { key: "a" });
    });

    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      fireEvent.keyDown(document, { key: "b" });
    });

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should not call the callback when the metaKeys are not satisfied", () => {
    const callback = jest.fn();
    const keys = ["a", "b"];
    const metaKeys: KeyboardMetaKeys[] = ["CTRL"];

    renderHook(() => {
      useKeyPress(callback, keys, metaKeys);
    });

    act(() => {
      fireEvent.keyDown(document, { key: "a" });
    });

    expect(callback).not.toHaveBeenCalled();
  });
});
