function findFirstGreaterThan(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            return arr[i]; 
        }
    }
    return null;
}
const array = [1, 3, 7, 9, 11];
const givenValue = 5;
console.log(findFirstGreaterThan(array, givenValue)); // Output: 7
