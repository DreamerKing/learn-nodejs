test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  // expect(n).toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('add float number', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);
  expect(value).toBeCloseTo(0.3, 0.00000000000000001);
});

test('string', () => {
  expect('team').not.toMatch(/I/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('array', () => {
  expect(shoppingList).toContain('kleenex');
  expect(new Set(shoppingList)).toContain('milk');
});

function compile() {
  throw new Error('opps!');
}

test('Exceptions', () => {
  expect(() => {
    compile();
  }).toThrow();

  expect(() => {
    compile();
  }).toThrow(/opps/);

  expect(() => {
    compile();
  }).toThrow('opps!');
});