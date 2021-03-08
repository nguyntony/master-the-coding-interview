const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// the idea is work from left to right, examine each item and compare it to the items on the left
// insert the item inthe correct position

// splice(), the first parameter is where to insert, the second parament is how many element to replace, the third parameter is what to replace it with

// it is important to note that when using splice it will return an array hence why we use bracket notation to access the first (only) element

// months.splice(4, 1, 'May')
// this reads as: at index 4, we will replace 1 element with 'May'

// unshift, adds one or more elements to the beginning of the array.

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // the outer loop will check if the current element that the loop is on is lesser than the value of the first element, if it is then we want to take that element and unshift it to the beginning of the array by using unshift, then to splice element.
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        // the inner loop here will start at index 1 and it will continue to check the elements to the left, which is why the condition is j < i, because the left side it what is being sorted and should already be sorted as we continue to loop through.

        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // here we are checking to see where to insert the element.
          // array[i] > array[j-i] means to check where j is currently but minus 1 index so the element previous to the current loop, for example we have j start at the 1 index, this condition will check the 0 index but also the 1 index to see it if it is greater
          // array[i] < array[j] the first condition checks to see if it is greater than the previous element that we are currently at but this condition will check to see if it is less than the condition we are currently at.
          array.splice(j, 0, array.splice(i, 1)[0]);
          // and this will splice based on where j is curerntly at and we will replace it with the spliced i
          // i comes from the outer loop that we are constantly using to check with the elements to the left of it.
          // so we would want to split i with where we are currently at in j where it meets the conditions, if it does not meet then it will remain it in its place.
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
