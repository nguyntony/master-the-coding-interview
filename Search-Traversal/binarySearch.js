// you are given a sorted array and a num, you need to check to see if the num exists in the array
// this solution should be better than linear search
// find the desired num and return the index at which is exists, otherwise return -1

function binarySearch(array, target) {
  // if we cannot find the target's index, we are going to return -1
  let start = 0; // start index
  let end = array.length - 1; // end index
  let mid = Math.floor((start + end) / 2);

  while (array[mid] !== target && start <= end) {
    if (target < array[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }
  return array[mid] === target ? mid : -1;
}

console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    0
  )
);
