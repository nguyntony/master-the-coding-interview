// prompt: there are three types of edits that can be performed on strings: insert a char, remove a char, or replace a char. Given two strings, write a fn to check if they are one edit (or zero edits) away.

// goal:
// I need to check to see if two strings are either one edit away
// or possibly 0 edits away.
// some checking that I can do is that that means that the difference between the two strings have to be 1.
// I can create a map then count the letters that way and ensure that there is only one edit away.

function oneAway(string1, string2) {
  const length1 = string1.length;
  const length2 = string2.length;

  if (Math.abs(length1 - length2) > 1) {
    return false;
  }

  const cache1 = makeCache(string1);
  const cache2 = makeCache(string2);

  if (length1 - length2 === 0) {
    // if both strings have the same length then I need to see if they only have one difference. I can do that by checking the keys
    if (!moreThanOne(cache1, cache2)) {
      // if a char appears more than once then it'll return false
      return false;
    }
  } else {
    if (!oneEdit(cache1, cache2, length1, length2)) {
      return false;
    }
  }

  return true;
}

function makeCache(string) {
  const cache = {};
  for (char of string) {
    if (!cache[char]) {
      cache[char] = 1;
    } else {
      cache[char]++;
    }
  }
  return cache;
}

function moreThanOne(cache1, cache2) {
  // in the event where the lengths are the same, I need to make sure that the frequency of the characters appear the same amount of time, I will only let one difference happen once.
  let once = false;
  for (key in cache1) {
    if (cache1[key] != cache2[key]) {
      if (!once) {
        once = !once;
      } else {
        return false;
      }
    }
  }
  return true;
}

function oneEdit(cache1, cache2, length1, length2) {
  // here I need to check that all of the letters in the shorter string appears the same amount of times
  let shorter = length1 > length2 ? cache2 : cache1;
  let longer = length1 > length2 ? cache1 : cache2;
  for (key in shorter) {
    if (shorter[key] != longer[key]) {
      return false;
    }
  }
  return true;
}

// console.log(oneAway("tony", "ppnyy"));
// the reason why this test case failed is because cache1 is tony and cache2 is pny, according to my check up there it sees that there is only on difference.
// so for this test case I need to check the values.
// I can do a quick check that all the values need to equal 1
// console.log(oneAway("tony", "pony"));
// console.log(oneAway("toyy", "poyy"));
// console.log(oneAway("toyy", "payy"));
console.log(oneAway("tay", "tony"));
console.log(oneAway("toy", "tony"));
console.log(oneAway("taa", "taay"));
console.log(oneAway("tao", "taay"));
