// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

const twoSum = (nums, target) => {
  // will be given an array, need to find two elements that add up to the target.
  // any element that is greater than the target is disqualified, these will be ignored.
  // I can have another array, that catches the index of the values that are lower.
  const cache = {}; // creating a cache that will have a key of the remainder that we are looking for.
  let remainder;

  for (let i in nums) {
    remainder = target - nums[i]; // find out the remainder
    console.log(`remainder is ${remainder}`);
    if (!cache[remainder]) {
      // check to see if the remainder does not exists in the cache
      cache[nums[i]] = i; // add the element that we have already seen as value: index
      console.log(cache);
    } else if (cache[remainder]) {
      // check to see if the remainder does exist
      return [cache[remainder], i]; // if it does, return an array of the current index we are on and the value of the remainder
    }
  }
};

// twoSum([2, 7, 11, 15], 9);
twoSum([0, 4, 3, 0], 0);
