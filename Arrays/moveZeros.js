// https://leetcode.com/problems/move-zeroes/description/

// key points
// - traverse through the loop, move the zero to the end
// - make sure not to affect the relative positions of the elements greater than 0

// NOTE
// 1. You must do this in-place without making a copy of the array.

// steps 
// 1. capture the length of the array 
// 2. capture the amount of zeros that is in the array
// 3. as you loop through the array, count the zero but then delete it. 
const moveZeros = (nums) => {
  let j = 0; 

  for (i in nums) {
    if (nums[j] === 0) {
      nums.splice(j, 1)
      nums.push(0)
    } else {
      j++
    }
  }
  return nums
}

console.log(moveZeros([0,0,1,0,3,12]))