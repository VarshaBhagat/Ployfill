function nth(arr, index) {
    if(index<0) {
        return arr[arr.length+index]
    }
    return arr[index]
}

nth(['a', 'b', 'c', 'd'], -2)

// c

nth(['a', 'b', 'c', 'd'], 1);
// => 'b'