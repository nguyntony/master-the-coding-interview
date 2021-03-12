function fibMaster() {
  let cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fastFib = fibMaster();
console.log(`DP, ${fastFib(10)}`);

// although this is faster than the other fib function that we created, this one does have a greater space complexity.
