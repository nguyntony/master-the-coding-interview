// https://www.hackerrank.com/challenges/30-conditional-statements/problem

// if n is odd -> Weird
// if n is even and inclusive 2 - 5 -> Not Weird
// if n is even and inclusive 6 - 20 -> Weird
// if n is even and greater than 20 -> Not Weird

function isWeird(N) {
  if (N % 2 !== 0) console.log('Weird');
  else if (N % 2 === 0) {
    if (N >= 2 && N <= 5) console.log('Not Weird');
    else if (N >= 6 && N <= 20) console.log('Weird');
    else if (N > 20) console.log('Not Weird');
  }
}

isWeird(2);
