Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34


inne rozwiązania

function opposite(number) {
  return -number;
}

const opposite = number => -number;

function opposite(number) {
    return number * (-1);
}

const opposite = n => -n;

function opposite(number) {
  if (number === 0) {
    return 0;
  } else if (number.toString().includes('.') && number > 0) {
    return parseFloat("-" + number, 10);
  } else if (number > 0) {
    return parseInt("-" + number, 10);
  } else if (number < 0 && number.toString().includes('.')) {
    var didget = number.toString().split('-').pop();
    return parseFloat(didget);
  } else {
    var didgets = number.toString().split('-').pop();
    return parseInt(didgets);
  }
}

function opposite(number) {
  return number > 0 ? -number : Math.abs(number);
}

