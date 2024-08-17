let s = ["i", "like", "cat", "and", "dog"];

let ans = "";
for (let i = 5; i >= 0; i--) {
    ans += s[i] + " ";
}

console.log("Reversed String:");
console.log(ans.slice(0, ans.length - 1)); 
