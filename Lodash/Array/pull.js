function pull(arr, ...values){
    return arr.filter((i)=>!values.includes(i))
}

let array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
pull(array, 'a', 'c');
// ["b", "b"]