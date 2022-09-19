function squareSum(numbers) {
    return numbers.map(item => item * item).reduce(
      (previousValue, currentValue) => previousValue + currentValue, 0
    );
  }