// https://leetcode.com/problems/maximum-subarray/

// keypoints
// - contiguous, meaning that the numbers need to be beside one another
// - add each element to the next to it and keep track of the sum that it adds
// - find the largest sum of a subarray 

// steps 
// 1. declare a variable to keep a running track of the largest sum
// 2. you could declare a second variable to keep track of the sum that we are currently adding for the sub array or you could change the array itself 
// 3. as you loop through the array you will use Math.max() to select the greater value, one value will be the currect number during that loop, the second value will be the sum of the current value (which is the 'one value') and the value before it
// 4. you will compare result to its current value along with the value that you just deemed as higher in the step above.

const maxSubArray = function(nums) {
  if(!nums) return;
  if(nums.length === 1) return nums[0];

  let result = nums[0]; 
  for(let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
    result = Math.max(result, nums[i]);
  }
  return result; 
};