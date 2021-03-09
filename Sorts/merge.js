const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// if you are familiar with recursion then this is will a bit easier for you to understand.

// slice will return a portion of the array, the first parameter is where to start, the second parameter is where to end, the end value will not be included

// if the end is not specified then it will return the rest of the array.

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const mergeSortedAnswer = mergeSort(numbers);
console.log(mergeSortedAnswer);
