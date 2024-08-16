function findMinMax() {
    let Arr = [50, 120, 20, 108, 40];

    let minValue = Math.min(...Arr);
    let maxValue = Math.max(...Arr);
    
    console.log("Minimum element is:" + minValue);
    console.log("Maximum Element is:" + maxValue);
}

findMinMax()
