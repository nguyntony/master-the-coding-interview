// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

// you are given a array prices where the index of each price also represents the ith day
// find the max profit you can achieve, you may complete as many transactions as you like (ie. buy one and sell one share of the stock multiple times)
// you may not engage in multiple transactions simultaneously (ie. you must sell the stock before you buy again)

const maxProfit = (prices) => {
  // you are given an array where the index represents the day
  // you need to return your profit if there is one
  // if the prices arr is in descending order then you made no profit.
  // you can only buy after you sell.
  // [1,2,3,4,5] you can buy 1 and sell at 5 for 4, or you could buy and sell each time.
  // bc when you buy 1 and sell at 2 that's 1
  // 2 - 1 = 1
  // 3 - 2 = 1
  // 4 - 3 = 1
  // 5 - 4 = 1
  // this also equals 4

  if (isDescending(prices)) return 0;
  else {
    return checkStocks(prices);
  }
};

const isDescending = (prices) => {
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      return false;
    }
  }
  return true;
};

const checkStocks = (prices) => {
  let totalProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      // is the current price is less than the next price, we want to buy
      totalProfit += prices[i + 1] - prices[i];
    }
  }
  return totalProfit;
};

console.log(maxProfit([7, 16, 5, 4, 3, 2, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 5, 4, 3, 2, 1]));
