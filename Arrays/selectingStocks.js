function selectStock(saving, currentValue, futureValue) {
  let cache = createCache(currentValue, futureValue);
  console.log(cache);
  let values = Object.entries(cache).sort((a, b) => b[1] - a[1]);
  // console.log(values);
  let total = 0;

  for (let stock of values) {
    if (saving >= 0) {
      console.log(stock);
      saving -= currentValue[stock[0]];
      console.log(saving);
      total += stock[1];
    } else if (saving < 0) {
      break;
    }
  }
  console.log(total);
  return total;
}

function createCache(currentValue, futureValue) {
  const cache = {};
  for (let i = 0; i < currentValue.length; i++) {
    if (!cache[i]) {
      let change = futureValue[i] - currentValue[i];
      if (change >= 0) {
        cache[i] = change;
      } else if (change < 0) {
        cache[i] = 0;
      }
    }
  }

  return cache;
}

console.log(selectStock(200, [1, 2, 10, 6], [5, 3, 5, 20]));
