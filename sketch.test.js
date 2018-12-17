const sum = require('./sketch');

test('test 1 : adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('test 2 : adds 5 + 5 to equal 10', () => {
    expect(sum(5, 5)).toBe(10);
});

test('test 3 : adds 7 + 7 to equal 14', () => {
    expect(sum(7, 7)).toBe(14);
});
