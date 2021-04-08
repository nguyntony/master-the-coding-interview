// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

const intersect = (nums1, nums2) => {
  const count = {};

  for (let num of nums1) {
    if (!count[num]) {
      count[num] = 1;
    } else {
      count[num]++;
    }
  }

  const result = [];

  // loop through the second arr
  // we want to check to see if the elements in the second arr exists within the first arr cache.
  // in the first arr cache, we are storing the element as the key and the freq as the value
  // as we loop through the second arr, if we meet an elem that exists in the cache, we will add that elem to the result arr and decrease the freq value in cache, if we meet that same value you again, we are checking to see if the freq is greater than 0, if it is then we will add that elem, again.
  for (let num of nums2) {
    if (count[num] > 0) {
      result.push(num);
      count[num]--;
    }
  }

  return result;
};

console.log(intersect([1, 2, 4, 4], [1, 2, 3, 4, 5, 4]));
