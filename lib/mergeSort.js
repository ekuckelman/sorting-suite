function merge(rightSide, leftSide) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < leftSide.length && rightIndex < rightSide.length) {
    if(leftSide[leftIndex] < rightSide[rightIndex]) {
      sortedArray.push(leftSide[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightSide[rightIndex]);
      rightIndex++;
    }
  }
  return [...sortedArray, ...leftSide.slice(leftIndex), ...rightSide.slice(rightIndex)];
}

function sort(array) {
 if(array.length <= 1) { 
  return array;
 }
 let midIndex = Math.floor(array.length / 2);
 let leftSide = array.slice(0, midIndex);
 let rightSide = array.slice(midIndex);
 
 return merge(sort(leftSide), sort(rightSide));
}

module.exports = sort;