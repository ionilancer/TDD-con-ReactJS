describe('mocks examples', () => {
    test('first example', () => {
        const myMock = jest.fn()
        .mockReturnValueOnce(true)
        .mockReturnValueOnce("hello world");
        
        const result1 = myMock();
        const result2 = myMock();

        expect(myMock).toHaveBeenCalledTimes(2)
        expect(result1).toBe(true);
        expect(result2).toBe("hello world");
    });
});