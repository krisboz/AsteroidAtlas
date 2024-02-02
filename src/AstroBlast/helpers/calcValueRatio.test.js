import calcValueRatio from "./calcValueRatio";
import { describe, it, toEqual, expect } from "vitest";

describe("calcValueRatio", () => {
  it("case1: 1,10", () => {
    // Write your test case here
    const result = calcValueRatio(1, 10);
    expect(result).toEqual({
      inputOrder: 0.1,
      reverseOrder: 10,
    });
  });
  it("case2: 5/25", () => {
    // Write your test case here
    const result = calcValueRatio(5, 25);
    expect(result).toEqual({
      inputOrder: 0.2,
      reverseOrder: 5,
    });
  });
  it("case2: 25/5", () => {
    // Write your test case here
    const result = calcValueRatio(25, 5);
    expect(result).toEqual({
      inputOrder: 5,
      reverseOrder: 0.2,
    });
  });
});
