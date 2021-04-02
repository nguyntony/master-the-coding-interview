// Have the function KUniqueCharacters(str) take the str parameter being passed and find the longest substring that contains k unique characters, where k will be the first character from the string. The substring will start from the second position in the string because the first character will be the integer k. For example: if str is "2aabbacbaa" there are several substrings that all contain 2 unique characters, namely: ["aabba", "ac", "cb", "ba"], but your program should return "aabba" because it is the longest substring. If there are multiple longest substrings, then return the first substring encountered with the longest length. k will range from 1 to 6.

function KUniqueCharacters(str) {
  const unique = str[0]; // 3
  const edited = str.slice(1);
  const chars = uniqueCharacters(str); // a, b, c, e
  const allSubs = [];

  // I need to loop through the given str by the length of the chars.
  for (let char of chars) {
    allSubs.push(findSubstring(edited, char, unique));
    console.log(allSubs);
  }
}

function findSubstring(edited, char, unique) {
  let sub = "";
  let seen = {};

  // for (let i = 0; i < edited.length; i++) {
  //   if (edited[i] === letter) {
  //     seen[edited[i]] = true;
  //     sub += edited[i];
  //     console.log(sub);
  //   } else if (edited[i] !== letter && Object.keys(seen).length <= unique) {
  //     console.log(Object.keys(seen));
  //     seen[edited[i]] = true;
  //     sub += edited[i];
  //     console.log(sub);
  //   }
  // }

  for (let letter of edited) {
    console.log(Object.keys(seen));

    if (letter === char) {
      sub += letter;
      seen[letter] = true;
    } else if 
    console.log(sub);
  }

  return sub;
}

function uniqueCharacters(str) {
  const edited = str.slice(1);
  const chars = [];
  for (let char of edited) {
    if (!chars.includes(char)) {
      chars.push(char);
    }
  }
  return chars;
}

console.log(KUniqueCharacters("3aabacbebebe"));
// console.log(uniqueCharacters("3aabacbebebe"));
