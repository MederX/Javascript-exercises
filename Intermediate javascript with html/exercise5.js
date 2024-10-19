document.getElementById('findPrimesButton').addEventListener('click', function() {
    const limit = parseInt(document.getElementById('inputLimit').value);
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }
    document.getElementById('result').textContent = "Prime Numbers: " + primes.join(', ');
});
