// prompt: write a method to replace all spaces in a string with %20. You may assume that the string has sufficient space at the end to hold the additional characters. and that you are given the "true" length of the string.

// goal:
// - given a string with spaces, I need to replace it with %20
// I need to return a new string with the spaces.

function URLify(str) {
  // I can do a quick check to see if the strings even have spaces.
  if (!str.includes(" ")) {
    return str;
  }

  // what I can do is split the word based on spaces and add a %20
  let arr = str.split(" ");
  let URL = [];
  for (let i = 0; i < arr.length; i++) {
    URL.push(arr[i]);
    if (!(i === arr.length - 1)) {
      // what does this mean? well without this it will include %20 after the last word in the string but we only need it between so I wrote a condition that will grab the last word which is arr.length - 1. I need to subtract one because arrays start with the 0th index.

      // the condidion is if i === arr.length - 1, I want this to result in true then turn it into false so it won't run but it will run for the other words bc for the other words, it'll result in false but I turn it to true
      URL.push("%20");
    }
  }
  return URL.join("");
  // the join method will combine the array, if you do not pass anything to the method it will include the commas from the array but if accept and empty string, it will remove the commas.
}

console.log(URLify("oneword"));
console.log(URLify("two words"));
