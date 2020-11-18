export {};

describe("Sample test", () => {
   test("should be equal to 1", () => {
      expect(1).toBe(1);
   });
});

describe("Typescript Sample test", () => {
   function giveMeThisString(str: string) {
      return str;
   }
   test("should be equal to 1", () => {
      expect(giveMeThisString("abc")).toBe("abc");
   });
});
