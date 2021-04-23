// colt steele bubble sort
// not that efficient or commonly used
// sorting an array from smallest to largest the larger numbers will 'bubble' up
// as we iterate through the arr, we are comparing one element to the one beside it,
// it will do this comparison and 'swap' accordingly

// - you could make a swap helper fn but not necessary.

// psuedocode
// 1. start looping with a var called i at the end of the arr towards the beginning
// 2. start an inner loop with a var called j from the beginning until i - 1
// 3. if arr[j] is greater than arr[j+1], swap those two values

const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; i < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

bubbleSort([37, 45, 29, 8]);

// if our data is almost sorted bubble sort still goes through all the iterations, so this is not good.

const bubbleSortOptimized = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; i < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

bubbleSortOptimized([1, 2, 3, 4, 5, 8, 7, 9, 10, 11]);

// time complexitiy is generally quadratic which is n^2
