function insertionSort(array) {
  for(let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let compareIndex = i - 1;
    while(compareIndex >= 0 && array[compareIndex] > currentValue) {
      array[compareIndex + 1] = array[compareIndex];
      compareIndex--;
    }
    array[compareIndex + 1] = currentValue;
  }
  return array;
}

module.exports = insertionSort; 
