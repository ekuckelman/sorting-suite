const {assert} = require('chai');
const bubbleSort = require('../lib/bubbleSort.js');

describe('bubble Sort', () => {
  it('should be able to sort a small array of numbers', () => {
    let array = [2, 5, 3, 4, 1, 6, 7, 8];
    bubbleSort(array);
    assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7, 8])
  });

  it('should be able to sort a small array of letters', () => {
    let array = ['a', 'd', 'e', 'c', 'b', 'f', 'g', 'h'];
    bubbleSort(array);
    assert.deepEqual(array, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
  });

  it('should be able to sort a large array of random numbers', () => {
    let largeArray = [];
    let min = 0;
    let max = 1000;

    for(let i = 0; i < max; i++) {
      let number = Math.floor(Math.random() *(max + min));
      largeArray.push(number);
    }

    bubbleSort(largeArray);
    assert.isAtLeast(largeArray[40], largeArray[39], 'LargeArray index 40 is greater than LargeArray index 39');
  });
});