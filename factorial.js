function factorial(n) {
    if (n < 0) return "Factorial for negative numbers is not defined";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Testing the function with 5
