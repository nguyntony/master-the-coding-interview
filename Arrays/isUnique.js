// prompt: implement an algorithm to determine if a string has all unique characters. what if you cannot use additional data structures.

// goal:
// 1. given a string, I need to figure out if each character is unique
// teeth would return false bc of the e and t
// song would return true bc each character is unique

function isUnique(str) {
  // I will need to traverse through a string.
  for (let i = 0; i < str.length; i++) {
    // I need to somehow keep track of the letters that I saw but I cannot use additional data stuctures.
    // I guess I could use a nested for loop and then check to see if any of the characters match to one another.
    for (let j = 0; j < str.length; j++) {
      if (i === j) {
        return false;
      }
    }
  }

  return true;
}

console.log(isUnique("testing"));

// my solution is O(n^2) or quadratic because I have nested for loops, if I had the ability to use other data structures, I would create a cache that would store the values as I see them and as soon as I see the same char twice, I would break. this proposed solution would be linear but the space complexity is also linear.
