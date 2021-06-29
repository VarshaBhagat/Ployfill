function initial(arr) {
  return arr.slice(0,arr.length-1)
}

// initial([1])
// []
// initial([1,2,2])
// [1, 2]
// initial([1])
// []
// initial([{a:1},{b:2}])
// {a: 1}