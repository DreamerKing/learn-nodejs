import assert from "assert";

// assert.deepEqual([[1, 2, 3], 4, 5], [[1, 2, '3'], 4, 5]);
// assert.deepEqual([[1, 2, "3"], 4, 5], [[1, 2, 3], 4, 5]);
// assert.deepStrictEqual([[1, 2, '3'], 4, 5], [[1, 2, 3], 4, 5]);
// assert.deepEqual(/a/gi, new Date())

const { message } = new  assert.AssertionError({
    actual: 1,
    expected: 2,
    operator: 'strictEqual'
});

console.log(message);