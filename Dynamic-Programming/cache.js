function memoizedAddTo80() {
  let cache = {};

  return function (n) {
    if (n in cache) {
      return cahce[n];
    } else {
      console.log("longtime passed");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo80();
console.log(`1 ${memoized(5)}`);
console.log(`2 ${memoized(5)}`);

// we are using closure here to improve upon caching. it is best practice to have the cache inside of the function so that it doesn't pollute the global variables.
