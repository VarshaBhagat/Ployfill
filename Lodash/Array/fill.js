function fill(arr, value, startIndex, endIndex) {
    return arr.fill(value, startIndex, endIndex)
}

// fill([4, 6, 8, 10], '*', 1, 3)
// [4, "*", "*", 10]
// fill(Array(3), 2)
// [2, 2, 2]
// fill([1,2,3], 'a')
// ["a", "a", "a"]