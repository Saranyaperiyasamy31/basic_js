function findLongestWord(arr) {
    let longestWord = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) { 
            longestWord = arr[i];
        }
    }

    return longestWord; 
}
