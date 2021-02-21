// Create a function that reverses a string.

const reverse = (string) => {

  if (!string || string.length < 2 || typeof string !== 'string') {
    return 'cannot compute'
  }

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

// 4. after looking at this code, something that you may want to do is error handle, the first thing that you can do is check the input and ensure that you did receive a string. 
// implement this by using an if statement, 

// if (!string || str.length < 2 || typeof string !== 'string') {
//   return 'cannot compute'
// }

// 5. in JS strings are essentially arrays so technically you do not need to call .split()

// cleaned up version

function reversedSolution(string) {
  if (!string || string.length < 2 || typeof string !== 'string') {
    return 'cannot compute'
  }

  const backwards = []
  for (let i = string.length; i > -1; i--) {
    backwards.push(string[i])
  }

  return backwards.join('')
}

const anotherTest = reversedSolution('teSting doeS This WORK?')
console.log(anotherTest)

const reverse3 = string => [...string].reverse().join('')