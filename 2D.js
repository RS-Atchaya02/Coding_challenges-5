function isNumberIn2DArray(array2D, number) {
    // Flatten the 2D array into a 1D array
    let flattenedArray = [];
    
    for (let i = 0; i < array2D.length; i++) {
        for (let j = 0; j < array2D[i].length; j++) {
            flattenedArray.push(array2D[i][j]);
        }
    }

    // Check if the number is present in the flattened array
    for (let k = 0; k < flattenedArray.length; k++) {
        if (flattenedArray[k] === number) {
            return true;
        }
    }

    return false;
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(isNumberIn2DArray(array2D, 5)); // Output: true
console.log(isNumberIn2DArray(array2D, 10)); // Output: false

