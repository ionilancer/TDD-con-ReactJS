describe("matchers", () => {
  test("toBe", () => {
    expect(true).toBe(true);
  });
  test("toEqual", () => {
    const data: any = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
  test("not", () => {
    expect(true).not.toBe(false);
  });
  test('string', () => {
    expect("test").not.toMatch(/I/);
  });
  test('toThrow', () => {
    //expect(() => compileAndroidCode()).toThrow();
    //expect(() => compileAndroidCode()).toThrow(Error);
  
    // You can also use a string that must be contained in the error message or a regexp
    //expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
   // expect(() => compileAndroidCode()).toThrow(/JDK/);
  
    // Or you can match an exact error mesage using a regexp like below
    //expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
   // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
  });
});
