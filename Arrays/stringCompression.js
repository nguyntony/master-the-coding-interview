// prompt: implement a method to preform basic string compression using the counts of repeated characters. For example the string aabcccccaaa would become a2b1c5a3. If the compressed string would not become smaller than the original string, your method should return the original string. You can assume the string only has uppercase and lowercase letters.

// goal:
// you are given a string with a series of letters
// I need to return a new string that has the frequency of each letter after declaring the letter
// so aaabbbccc is a3b3c3
// the length of the new string needs to be lower than the original string input
// if it is not then return the original string.

function stringCompression(string) {
  let compressed = "";
  let currChar = "";
  let currCount = "";

  for (i in string) {
    // we will loop through the string
    if (currChar !== string[i]) {
      // if the current char does not equal to the current letter in the string then this will run.
      console.log(currChar, string[i], i);
      compressed = compressed + currChar + currCount;
      // console.log(compressed);
      // we'll take compressed, and add on the current char and current count
      currChar = string[i];
      // current character will now be the currect letter in the string
      currCount = 1;
    } else {
      currCount++;
    }
  }
  compressed = compressed + currChar + currCount;

  return compressed.length > string.length ? string : compressed;
}

console.log(stringCompression("yyaaat"));
