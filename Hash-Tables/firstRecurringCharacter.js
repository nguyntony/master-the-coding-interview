// given an array, you will need to return the first recurring character.

// [2,4,5,6,2,3,7,3], answer is 2
// [2,1,1,3], answer is 1
// [1,2,3,4], answer is undefined

// key points
// - given an array, that may contain the same element twice
// - when that is the case, return that element
// - if no elements are repeated then return undefined

// steps
// 1. create a hash that will store the elements as we loop through the array
// 2. the element can be the key and the frequency will be the value
// 3. as soon as the value for any keys is more than 1 return the element which may be the key

const firstRecurringCharacter = arr => {
  const cache = {};

  for (let c of arr) {
    if (!cache[c]) {
      cache[c] = 1
    } else {
      return c
    }
  }
  return undefined
}

console.log(firstRecurringCharacter([2,8,5,2]))
console.log(firstRecurringCharacter([2,1,1]))
console.log(firstRecurringCharacter([1,2,3,4]))