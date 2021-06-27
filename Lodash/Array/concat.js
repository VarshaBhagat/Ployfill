//Creates a new array concatenating array with any additional arrays and/or values.
function concat1(arr, ...arg) {
  return arr.concat(...arg)
}

// concat1([1],2, [3], [[4]])
// [1, 2, 3, [4]]