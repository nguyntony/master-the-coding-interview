const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(array, input, start, end) {
  if (start > end) {
    // at some point the start will become higher than end and this is the base case to end the recursion.
    return null;
  }

  let mid = Math.floor((start + end) / 2);
  // Math.floor() will round the number so we will receive a whole number.

  if (array[mid] === input) return array[mid];
  if (array[mid] > input) {
    // must be in left half, if the midpoint is greater then the input that means it'son the left side with the lower numbers.
    return binarySearch(array, input, 0, mid - 1);
  } else if (array[mid] < input) {
    //must be in right half
    return binarySearch(array, input, mid + 1, end);
  }
}

const match = binarySearch(ids, 8, 0, ids.length - 1);
console.log(match);
