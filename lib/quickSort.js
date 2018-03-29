function quickSort(array) {
  if(array.length <= 1) {
    return array;
  }
  let pivot = array.pop();
  let lessThan = [];
  let greaterThan = [];

  for(let i = 0; i < array.length; i++) {
    if(array[i] < pivot) {
      lessThan.push(array[i]);
    } else {
      greaterThan.push(array[i]);
    }
  }
  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)]
}

module.exports = quickSort;