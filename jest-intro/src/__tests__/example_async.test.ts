//callbacks
const asyncCallback = (cb: Function) => {
  setTimeout(() => {
    cb(true);
  }, 1000);
};

//promises
const asyncPromise = () => new Promise((resolve) => resolve(true));

describe("async code", () => {
    
  test("example of async with callback", (done) => {
    asyncCallback((result: boolean) => {
      expect(result).toBe(true);
      done();
    });
  });
  test("example of async with promises", () => {
    return asyncPromise().then((result) => expect(result).toBe(true));
  });
  test("example of async with async/await", async() => {
    const result = await asyncPromise();
    expect(result).toBe(true);
  });
});
