// similar to bubble and selection sort but insertion is exceptionally goot at: if the data is almost already sorted

// builds up the sort by gradually creating a larger left half which is always sorted.

// big o: quadratic, n^2

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (j = i - 1; j > -1 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};

console.log(insertionSort([2, 57, 19, 22, 1]));
