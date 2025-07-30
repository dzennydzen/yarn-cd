import sum from '../app.js';

describe('sum', () => {
    test('should return sum of digits', () => {
        expect(sum(2,3)).toBe(5);
    })
})