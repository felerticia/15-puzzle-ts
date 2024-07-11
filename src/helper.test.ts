import { shuffle } from "./helper";

describe("shuffle function", () => {
  const arr = shuffle();
  it("should have 16 items", () => {
    expect(arr.length).toStrictEqual(16);
  });
  it("should have the number 16", () => {
    expect(arr.includes(16)).toStrictEqual(true);
  });
  it("should not include number 0", () => {
    expect(arr.includes(0)).toStrictEqual(false);
  });
});
