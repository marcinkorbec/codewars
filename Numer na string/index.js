// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
    return num.toString();
  }

//   testy

const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});


// inne rozwiazania

function numberToString(num) {
    // Return a string of the number here!
    return String(num);
}

function numberToString(num) {
    return ''+num;
}

const numberToString = num => num.toString();
