// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

const singleNumber = (nums) => {
  if (nums.length === 1) return nums[0];
  // given an array, every number will appear twice, except for one, try to find the one
  const cache = {};
  for (let num of nums) {
    if (!cache[num]) {
      cache[num] = 1;
    } else {
      cache[num]++;
    }
  }
  const elements = Object.entries(cache);
  for (elem of elements) {
    if (elem[1] === 1) {
      return Number(elem[0]);
    }
  }
};

console.log(singleNumber([2, 4, 1, 4, 2]));
console.log(singleNumber([2, 4, 1, 1, 2]));
