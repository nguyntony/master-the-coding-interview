function linearSearch(array, target) {
  for (let i in array) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([10, 15, 3, 60, 90], 15));
