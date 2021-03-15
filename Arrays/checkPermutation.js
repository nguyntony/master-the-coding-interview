// prompt: given two strings, write a method to decide if one is a permutation of the other.

// goal:
// - given two strings, I need to check if the two are the same or not.
// permutation basically means, the same values occur but may be arranged differently.
// I will need to return a bool

function permutation(str1, str2) {
  // I can do some quick checks right off the bat, if the two lengths are different then return false
  if (str1.length !== str2.length) {
    return false;
  }

  // so the above does a quick check
  for (i of str1) {
    // I can loop through and check to see if i exists in the second string
    // the .includes method returns a bool
    if (!str2.includes(i)) {
      // so if the value does not exist, we want this to run therfore we want to include the !
      console.log(i);
      return false;
    }
  }

  return true;
}

console.log(permutation("tony2", "tony1"));
console.log(permutation("tony", "ynot"));

// this solution is linear, with some quick checking.
