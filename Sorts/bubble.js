const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// the idea behind bubble sort is that we are looping through the array and we will check two items at a time. depending on which one is lesser, these values will switch.

// the highest value will bubble to the end.

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // the outer loop will ensure that we check each element because in each loop the largest number will bubble to the end, this outer loop will specify how many times to run the sort which is done in the inner loop

    for (let j = 0; j < length; j++) {
      // here, we are checking each beginning value and the largest value will bubble to the end until it satisfies the condition.

      // the j here keeps track of the highest value, when we switch the values and iterate to the next part of the loop, if we switched values before j continues to point at the greater value but if we find a higher target then the inner loop will keep swapping the values until it is in its respective place.

      if (array[j] > array[j + 1]) {
        // swap
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
