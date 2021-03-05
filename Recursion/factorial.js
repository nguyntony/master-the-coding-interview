// 5! = 5 * 4 * 3 * 2 * 1
// you keep going down one by one until you reach to 1

// write a recursive function to do this

// let's say that you are given the number 10, you need to multiply all the numbers from 1 - 10
// I could just start at the given num and decrement
// base case will be when the number reaches 1

// this will start as undefined and it will keep track of the product
// let total = 1;
// const factorialRecursive = (num) => {
//   total = total * num;
//   num--;
//   if (num === 1) {
//     return total;
//   }
//   return factorialRecursive(num);
// };

// console.log(factorialRecursive(5));

const factorialRecursive = (num) => {
  if (num === 2) {
    return 2;
  }

  return num * factorialRecursive(num - 1);
};

console.log(factorialRecursive(5));
