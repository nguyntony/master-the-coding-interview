// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

function rotate(nums, k) {
  nums.unshift(...nums.splice(nums.length - k));
}
