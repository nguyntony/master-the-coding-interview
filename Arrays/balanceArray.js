function maxValue(n, rounds) {
  let first = createBase(n);
  let account = [];
  for (let i = 0; i < rounds.length; i++) {
    // this will be the index of each round in rounds
    if (i === 0) {
      // meaning the first time it runs
      for (let j = rounds[i][0] - 1; j < rounds[i][1] - 1; j++) {
        // j will be the index first and second elements in each round
        first[j] = +rounds[i][2];
        account.push(first);
      }
    } else if (i !== 0) {
      for (let j = rounds[i][0] - 1; j < rounds[i][1] - 1; j++) {
        account[i - 1][j] += rounds[i][2];
      }
    }
  }

  return account;
}

function createBase(n) {
  const base = [];
  for (let i = 0; i < n; i++) {
    base.push(0);
  }
  return base;
}

console.log(
  maxValue(3, [
    [2, 3, 603],
    [1, 1, 286],
    [4, 4, 882],
  ])
);
