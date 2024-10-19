document.getElementById('fibonacciButton').addEventListener('click', function() {
    const n = parseInt(document.getElementById('inputNumber').value);
    const fibonacci = (num) => {
        const sequence = [0, 1];
        for (let i = 2; i < num; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence.slice(0, num);
    };
    const fibSequence = fibonacci(n);
    document.getElementById('result').textContent = "Fibonacci Sequence: " + fibSequence.join(', ');
});
