function difference(arr1, arr2){
  return arr1.filter((i)=>!arr2.includes(i))
}

//difference([2, 1], [2, 3]);
// => [1]