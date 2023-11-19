import { expect, test } from "vitest";
import cycleDays from "./cycleDays";

test("single day", () => {
  expect(cycleDays("2023-11-10", "none")).toStrictEqual(["2023-11-10"]);
});

test("middle of the month, e.g. 10.-17. ", () => {
  expect(cycleDays("2023-11-10", "2023-11-17")).toStrictEqual([
    "2023-11-10",
    "2023-11-11",
    "2023-11-12",
    "2023-11-13",
    "2023-11-14",
    "2023-11-15",
    "2023-11-16",
    "2023-11-17",
  ]);
});

test("end/beginning of the month with 31 days e.g. 31.-2.", () => {
  expect(cycleDays("2023-11-30", "2023-12-03")).toStrictEqual([
    "2023-11-30",
    "2023-12-01",
    "2023-12-02",
    "2023-12-03",
  ]);
});

test("end/beginning of a month with 30 days e.g.(30.-3.)", () => {
  expect(cycleDays("2023-10-30", "2023-11-03")).toStrictEqual([
    "2023-10-30",
    "2023-10-31",
    "2023-11-01",
    "2023-11-02",
    "2023-11-03",
  ]);
});
