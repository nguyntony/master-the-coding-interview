// https://leetcode.com/problems/contains-duplicate/description/

// key points 
// - you will be given an array of numbers
// - you need to find if any element appears twice

// steps
// 1. create a cache, to keep track of the frequency of each element
// 2. as soon as one element appears twice, break out and return true

const containsDuplicate = (nums) => {
  const cache = [];
  for (num of nums) {
    if (!cache[num]) {
      cache[num] = true
    } else {
      return true
    }
  }

  return false
}

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,10]))