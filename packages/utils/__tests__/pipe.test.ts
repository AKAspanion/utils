import { pipe } from "../src";

describe("pipe", () => {
  it("should be able to pipe functions", () => {
    const value = pipe(
      "1",
      (a: string) => Number(a),
      (c: number) => c + 1,
      (d: number) => `${d}`,
      (e: string) => Number(e)
    );
    expect(value).toBe(2);
  });
});
