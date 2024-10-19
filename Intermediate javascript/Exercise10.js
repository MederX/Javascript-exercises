function generateFibonacci(n) {
    var fibSequence = [0, 1];
    for (var i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence.slice(0, n);
}

console.log(generateFibonacci(10));  
