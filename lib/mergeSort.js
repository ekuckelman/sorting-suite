function merge(rightSide, leftSide) {
  let sortedArray = [];
  let rightIndex = 0;
  let leftIndex = 0;

  while(leftIndex < leftSide.length && rightIndex < rightSide.length) {
    if(leftSide[leftIndex] < rightSide[rightIndex]) {
      sortedArray.push(leftSide[leftIndex]);
      leftIndex++;
    }
      sortedArray.push(rightSide[rightIndex]);
      rightIndex++;
  }
  return [...sortedArray, ... leftSide.splice(leftIndex), ...rightSide.splice(rightIndex)];
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

//merge function
  // empty array to push sorted items to
  //start right and left indices at 0
  // while loop that checks( if indices are less than the length their repective sides)
    // conditional to check if the leftSide index is less than the right side index
      //if true, then 
        //push the leftIndex of the leftSide to the sorted array
        //increment up the leftIndex
      //else
        // push teh right index of the right side to the sorted array
        //increment up the right index

    //concat the sorted array with the sliced index of the left and right sides


// sort function
  // conditional to check if the array length is <= 1
    //if so, return the arrray
  //otherwise create variables for the middle index, leftside, and rightside
    //middle index needs to be / of the array length
    // leftside needs to be array from 0, to the middle
    // right side needs to be the rest
  // return the leftside and rightside recursively calling sort while invoking merge function