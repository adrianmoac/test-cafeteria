const verify = require('./cafeteria');

test('Correct input', () => {
  expect(verify('cafe, 2, 4, 5, 7, 8')).toBe(true);
});

test('Send a name with spaces', () => {
  expect(verify('cafe, 2, 4, 5, 7, 8')).toBe(true);
});

test('Send less than 2 character length in name', () => {
  expect(verify('l, 2, 4, 5, 7, 8')).toBe(false);
});

test('Send less than 2 character length in name', () => {
  expect(verify('cafeconmasdequincecaracteres, 2, 4, 5, 7, 8')).toBe(false);
});

test('Sending name characters', () => {
  expect(verify('café 1, 2, 4, 5, 7, 8')).toBe(false);
});

test('Sending a second name instead of a number', () => {
  expect(verify('cafe, té, 4, 5, 7, 58')).toBe(false);
});

test('Send a repeated size with spaces', () => {
  expect(verify('cafe, 2, 4, 4, 7, 8')).toBe(false);
});

test('Sending a size greater than 48', () => {
  expect(verify('cafe, 1, 4, 5, 7, 58')).toBe(false);
});

test('Sending a size smaller than 1', () => {
  expect(verify('cafe, 0, 4, 5, 7, 38')).toBe(false);
});

test('Send more than 5 sizes', () => {
  expect(verify('cafe, 5, 4, 5, 7, 8, 9')).toBe(false);
});

test('Send the name without sizes', () => {
  expect(verify('cafe')).toBe(false);
});

test('Not sending the name', () => {
  expect(verify('2, 3, 4, 5, 7, 8')).toBe(false);
});

test('Sending the input with two commas together', () => {
  expect(verify('cafe,, 2, 4, 5, 7, 8')).toBe(false);
});

test('Sending an empty string', () => {
  expect(verify('cafe,, 2, 4, 5, 7, 8')).toBe(false);
});