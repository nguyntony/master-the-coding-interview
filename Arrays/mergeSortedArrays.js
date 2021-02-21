// You are given two arrays, each one is sorted, now merge the sorted arrays to make one sorted array. 
// ie. [0,3,4,31], [3,4,6,30]
// desired result [0,3,3,4,4,6,30,31]

const mergeSortedArrays = (first, second) => {
  let result
  const unsorted = first.concat(second)
  result = unsorted.sort((a,b) => a - b)
  console.log(result)
}

mergeSortedArrays([0,3,4,31], [3,4,6,30])

// error handling: check the inputs, ensure that you are receiving arrays and also check if either array is empty (bc if that's the case then you can just return the one array since it's already sorted.)

function mergeSortedArraysSolution(array1, array2){
  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  const mergedArray = [];
  let i = 0;
  let j = 0;
  let k = 0;
  let array1Item = array1[i];
  let array2Item = array2[j];
  const totalLength = array1.length + array2.length


  while (k < totalLength){
    if(array2Item === undefined || array1Item < array2Item){
      mergedArray.push(array1Item);
      i++;
      array1Item = array1[i];
    }   
    else {
      mergedArray.push(array2Item);
      j++;
      array2Item = array2[j];
    }
    k++
  }
  return mergedArray;
}

const answer = mergeSortedArraysSolution([0, 3], [0, 3,4,6,30]);
console.log(answer)