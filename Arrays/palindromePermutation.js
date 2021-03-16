// prompt: given a string, write a fn to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permuation is a rearrangement of letters. The palindrome does not to be limited to just dictionary words.

// goal:
// I will be given a string and I need to capture the letters
// I need to somehow figure out that the words are the same back and forwards.
// there needs to be two of each letter, there can be only one instance where the letter appears once
// which will be the middle

function palinPerm(string) {
  // so I may want to lowercase everything and ignore spaces
  const edited = string.toLowerCase().replace(" ", "");
  console.log(edited);
  // I will need to loop through the string
  const cache = {};
  for (let char of edited) {
    if (!cache[char]) {
      cache[char] = 1;
    } else {
      cache[char]++;
    }
  }

  // I need to now check through the cache and see if there are two letters of each and only one instance where one letter appears
  let once = false;
  const keys = Object.keys(cache);
  for (key of keys) {
    // I need to allow only one instance of a letter once
    if (!(cache[key] % 2 === 0)) {
      // this condition means that there is a scenario where the letter does not appear an even amount of times. if that happens, I need to check that
      if (!once) {
        // this should check if this happens once, when it happens again I'll exit and return false
        once = !once;
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(palinPerm("Tony Nguyen"));
console.log(palinPerm("tat"));
console.log(palinPerm("tact coa"));
console.log(palinPerm("tact cotat"));
