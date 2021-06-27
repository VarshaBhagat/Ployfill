function drop(arr, n=1) {
   return arr.slice(n)
}

// drop([1, 2, 3]);
// => [2, 3]
 
// drop([1, 2, 3], 2);
// => [3]
 
// drop([1, 2, 3], 5);
// => []
 
// drop([1, 2, 3], 0);
// => [1, 2, 3]