// https://leetcode.com/problems/rotate-array/description/

// key points 
// - the input is an array, but you will also receive a second value which is a non-negative number
// - the second value will tell the array how many places to move to the right. 

// NOTE 
// modify in place 
// do not return anything

// steps
// 1. use splice to extract a subarray
// 2. use unshift to move that subarray beginning 

// .splice() the first element is the starting index, in this case you can grab the starting index by taking the array length and subtractint it from k, the second element will be the how many elements starting at the element do you want to replace, if you do not provide a second element it will remove the remaining elements at that starting position which is the first value

// splice will return an array so you can use this later

// .unshift() will add something to the beginning of an array, you can .unshift() the returned array from the splice but you will need to spread it

const rotateArray = (nums, k) => {
  nums.unshift(...nums.splice(nums.length - k, k))
  console.log(nums)
}

console.log(rotateArray([1,2,3,4,5,6,7], 3))