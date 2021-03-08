const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// this idea behind selection sort is that we start from left to right. you will start with the 0 index then compare the rest of the array to that element, if there is an element that is lesser than it, then it will switch places and we begin again with the 1 index.

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // this outer loop will allow to pause at one element at a time while checking the rest of the array. the first element is 99 at the 0 index, we want to capture the index because we need to know its place in order to switch places with a value that is lesser.

    let min = i; // each iteration of this outer loop, we will change the min to match the index that we are currently on.
    let temp = array[i]; // when we are traversing the outer loop we want to keep a temp for the current value that we're currently on

    for (let j = i + 1; j < array.length; j++) {
      // with us pausing at a specific element in the outer loop this inner loop will traverse the rest of the array and do the check for when there is a value less than the element we are currently at.

      if (array[j] < array[min]) {
        // in the event where there is a lesser value that exists in the remainder array, we will capture its index and assign it to min.
        min = j;
      }
    }

    // once we are done checking the inner array we still have the index in which we are currently at and we will switch that with the lesser value which is min.
    // the lesser value place will now be assigned to the temp that we declared above.
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);
