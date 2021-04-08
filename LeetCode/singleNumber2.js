const singleNumber = (nums) => {
  for (let i = nums.length - 1; i > -1; i--) {
    console.log(nums[i]);
    if (!nums.includes(nums.pop())) {
      console.log('found the single digit', nums[i]);
    }
  }
};

console.log(singleNumber([2, 4, 1, 4, 2]));
// console.log(singleNumber([2, 4, 1, 1, 2]));
