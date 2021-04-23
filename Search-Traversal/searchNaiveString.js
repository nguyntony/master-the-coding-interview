const naiveSearch = (long, sub) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    // loop through every character of the long str
    for (let j = 0; j < sub.length; j++) {
      // loop through every character of the sub str
      // what the nested loops are doing is that, for every outer long character it will loop through every sub character.
      if (sub[j] !== long[i + j]) break;
      // sub[0] !== long[0 + 0] if they === then we will go to the next iteration
      // sub[i] !== long[0 + 1] do the same as above, if at any point they do not === it will break and go to the next outer long char.
      if (j === sub.length - 1) count++;
      // if j is the length of the sub str, it means that it was able to loop thru j entirely and there is a match.
    }
  }
  return count;
};

console.log(naiveSearch('lorie loled', 'lo'));
