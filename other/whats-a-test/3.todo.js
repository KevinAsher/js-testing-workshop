// writing a testing framework
/*

Let's improve our error messages a bit, create a function
called `test` which can be given a title and a callback.

Then add a try/catch so you can log the title with
a note of success or error.

Then wrap each of your tests in a `test` function.

This also means that we can run all the tests even
if one of them fails!

Example of test function
test(title, () => {
  // arrange
  // act
  // assert
}

Then run this code with `node 3.todo`

> Make sure you're in the right directory!

 */

const {sum, subtract} = require('./math')



test('sum: 3 + 4 should equal 7', () => {
  // arrange
  let expected = 7;

  // act
  let result = sum(3, 4);

  // assert
  expect(result).toBe(expected);
})

test('subtract: 9 - 5 should equal 4', () => {
  // arrange
  let expected = 4;

  // act
  let result = subtract(9, 5);

  // assert
  expect(result).toBe(expected);
})

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (err) {
    console.error(`✗ ${title}`);
    console.error(`  ${err.stack}`);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
  }
}
