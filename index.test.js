const math = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(math.sum(1, 2)).toBe(3);
  });

  test('minus 3 - 2 to equal 1', () => {
    expect(math.minus(3, 2)).toBe(1);
  });