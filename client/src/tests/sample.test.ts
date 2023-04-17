export const add = (a: number, b: number): number => a + b;

describe("Sample unit test.", () => {
  test("1 + 2 = 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});