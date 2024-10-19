function isSubstring(str, substr) {
    return str.includes(substr);
}

console.log(isSubstring("hello world", "world"));  
console.log(isSubstring("hello world", "planet")); 
