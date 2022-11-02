import { storage } from "../lib/storage";
import { saveUsername, getUsername } from "../user";

jest.mock("../lib/storage.ts");

//const mockStorage: jest.Mocked<typeof storage> = <jest.Mocked<typeof storage>>storage;

const username = "test1";
describe("mocks examples", () => {
  test("first example", () => {
    const myMock = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValueOnce("hello world");

    const result1 = myMock();
    const result2 = myMock();

    expect(myMock).toHaveBeenCalledTimes(2);
    expect(result1).toBe(true);
    expect(result2).toBe("hello world");
  });
  test("second example", () => {
    saveUsername(username);
    expect(storage.save).toHaveBeenCalledTimes(1);
    expect(storage.save).toHaveBeenCalledWith({
      key: "username",
      value: username,
    });
  });
  test("third example", () => {
    //mockStorage.mockReturnValueOnce(username) 
    (<jest.Mock>storage.get).mockReturnValueOnce(username);
    const result = getUsername();
    expect(result).toBe(username);
    expect(storage.get).toBeCalledTimes(1);
    expect(storage.get).toHaveBeenCalledWith({ key: "username" });
  });
});
