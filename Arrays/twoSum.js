// https://leetcode.com/problems/two-sum/description/

// key points
// - given one array, may contain the same element twice 
// - given a target, this is the sum of the two elements that we need to find.
// - find two elements within the array, can be the SAME NUMBER but not the NOT the SAME ELEMENT

// the brute force would be to set up a nest for loop, the outer loop will grab one element and the nested loop will grab the next element, add the two up and if it matches the target return the indices of the two elements. this is quadratic time, not optimal

// 1. loop over the given array
// 2. subtract and each element from the target but then also check to see if the remainder if in the array, if not then move to the next
// 3. use the for...in loop to access the indices
// 4. return an array with two elements 
const twoSum = (nums, target) => {

  cache = {}
  let remainder

  for (i in nums) {
          remainder = target - nums[i]
          console.log(`remainder is ${remainder}`)
      if (!cache[remainder]) {
          cache[nums[i]] = i
          console.log(cache)
      } else if (cache[remainder]) {
          return [cache[remainder], i]
      }
  }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,1,3], 6))