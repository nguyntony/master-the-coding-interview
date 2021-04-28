// similar to bubble sort but instead of first placing large values into sorted position, it places small values into sorted position.

// big o: quadratic, n^2.

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }

    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
};

console.log(selectionSort([12, 28, 100, 56, 8]));
