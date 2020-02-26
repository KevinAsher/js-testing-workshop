// the most fundamental test

/*

write a test that reveals the bug.
Write code that throws an error with a helpful message about the bug,
but only if there's a bug.
So... if (calling sum with some numbers doesn't return the right thing) {
  then throw an error with a helpful message
}

Then run this code with `node 1.todo`

> Make sure you're in the right directory!

Bonus, write another test that would throw an
error if the subtract function were to have a bug

*/

// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a + b
const subtract = (a, b) => a + b

let result = sum(3,4);
let expected = 7;
if (result !== expected) {
  throw new Error(`${result} is not equal the expected value ${expected}`);
}

result = subtract(9,4);
expected = 5;
if (result !== expected) {
  throw new Error(`${result} is not equal the expected value ${expected}`);
}


