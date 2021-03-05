// add the first two items to get the next element
// the previous two items equal the next item

// given a number N return the index value of the fibonacci sequence

// if given 2 you will return the 2-index in the fibonacci sequence

// 0, 1, 1, 2, 3, 5, 8, 13
const fibonacciRecursive = (index) => {
  if (index < 2) {
    return index;
  }

  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
};

console.log(fibonacciRecursive(7));
