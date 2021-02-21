// Create a function that reverses a string.

const reverse = (string) => {
  let result = []

  // 1. treat any string as an array, using the .split() method on the string will turn it into an array where each character is a value in the string. 
  // Note: when using the .split() method you need to pass it a set of empty quotes and this will tell JS how to split the string. 
  const stringArr = string.split('')

  // 2. use a for loop to decrement through the array and as you are decrmenting, you will push each character into another array.
  for (let i = stringArr.length; i > -1; i--) {
    result.push(stringArr[i])
  }

  // 3. lastly you will want to return the result, in this case we also need to join the array so that it will become a string
  return result.join('')
}

const reversed = reverse('hi there, My name is tOny')
console.log(reversed)