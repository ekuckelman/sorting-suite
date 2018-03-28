const {assert} = require('chai');
const insertionSort = require('../lib/insertionSort.js');

describe('Insertion Sort', () => {
  let largeArray = [];
  it('should be able to sort a small array of numbers', () => {
    let array = [2, 5, 3, 4, 1, 6, 7, 8];
    insertionSort(array);
    assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7, 8])
  });

  it('should be able to sort a small array of letters', () => {
    let array = ['a', 'd', 'e', 'c', 'b', 'f', 'g', 'h'];
    insertionSort(array);
    assert.deepEqual(array, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
  });

  it('should be able to sort an array of positive and negative values', function() {
    let min = -100;
    let max = 100;

    for(let i = 0; i < Math.abs(min) + max; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;
      largeArray.push(number)
    }

    const sortedArray = insertionSort(largeArray)
    assert.isAtLeast(sortedArray[1], sortedArray[0]);
  });

  it('should be able to sort a large array of random numbers', () => {
    let min = 0;
    let max = 40000;
    console.log('max', max)
    for(let i = 0; i < max; i++) {
      let number = Math.floor(Math.random() *(max - min) + min);
      largeArray.push(number);
    }

    insertionSort(largeArray);
    assert.isAtLeast(largeArray[40], largeArray[39]);
  });
});