function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i; 
        }
    }
    return -1;
}
let myArray = [5, 18, 12, 7, 5, 20, 20,5];
let targetElement = 20;
let index = findIndex(myArray, targetElement);
console.log("Index of the first occurrence:", index);
