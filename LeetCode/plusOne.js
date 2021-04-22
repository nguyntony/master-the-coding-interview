// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
const plusOne = (digits) => {
  // if (digits.length === 1 && digits[0] === 0) {
  //   return [1];
  // }
  // console.log(digits);
  // let result = [];
  // let combined = BigInt(digits.join(''));
  // // console.log(combined);
  // combined += 1n;
  // // console.log(combined);
  // combined = combined.toString();
  // for (let letter of combined) {
  //   result.push(Number(letter));
  // }
  // // console.log(result);
  // return result;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// console.log(plusOne([9]));
