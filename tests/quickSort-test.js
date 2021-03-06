const {assert} = require('chai');
const quickSort = require('../lib/quickSort.js');

describe('quickSort', function() {
  let largeArray = [];
  it('should be able to sort a small array', function() {
    var array = [2, 3, 5, 6, 7, 4, 1, 8];
    assert.deepEqual(quickSort(array), [1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('should be able to sort letters', function() {
    var array = ['a','d', 'e', 'c', 'b', 'f', 'g', 'h'];
    assert.deepEqual(quickSort(array), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
  })

  it('should be able to sort an array of positive and negative values', function() {

    let min = -100;
    let max = 100;

    for(let i = 0; i < Math.abs(min) + max; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;
      largeArray.push(number)
    }

    const sortedArray = quickSort(largeArray)
    assert.isAtLeast(sortedArray[1], sortedArray[0]);
  });

  it('should be able to sort a large array of random numbers', function() {

    let min = 0;
    let max = 2000000;
    console.log('max', max)

    for(let i = 0; i < Math.abs(min) + max; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;
      largeArray.push(number)
    }

     const sortedArray = quickSort(largeArray)

    assert.isAtLeast(sortedArray[40], sortedArray[39]);
  })
})