import add from '../for-test/add';
import { describe, expect, test } from '@jest/globals';

test("add 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});