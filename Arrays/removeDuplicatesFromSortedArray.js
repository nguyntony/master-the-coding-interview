// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

const removeDuplicates = function (nums) {
  // given a sorted arr
  // remove the duplicates so that there are only unique elements
  // must remove them in place
  // return the length of the array
  // I can do a nested for loop...not optimal in terms of time

  // I can start looping from the end and then check the to see if the next elem is === to the prev, if so I can pop

  for (let i = nums.length - 1; i > -1; i--) {
    // console.log(`i ${nums[i]}, i + 1 ${nums[i + 1]}`);
    if (nums[i] === nums[i + 1]) {
      // if the current elem is === the prev elem then we want to remove the current elem because we already seen it before.
      nums.splice(i, 1);
    }
  }

  return nums.length;
};

console.log(removeDuplicates([1, 1, 2, 3, 4, 5, 5, 6, 7]));
