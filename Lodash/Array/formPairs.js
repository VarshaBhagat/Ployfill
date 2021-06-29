// method -1
function formPairs(arr){
  return arr.reduce((acc, val)=>{acc[val[0]]=val[1]; return acc},{})
}

// formPairs([['a', 1], ['b', 2]])
// {a: 1, b: 2}

//Method -2

// function formPairs(arr){
//   return Object.fromEntries(arr)
// }
  
