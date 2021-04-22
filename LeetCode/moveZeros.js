// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

const moveZeros = (nums) => {
  let i = 0;
  for (let num in nums) {
    if (num[i] === 0) {
      nums.splice(j, 1);
      nums.push(0);
    } else {
      i++;
    }
  }
  return nums;
};
