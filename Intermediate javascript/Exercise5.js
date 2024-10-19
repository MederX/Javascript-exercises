function findPrimes(limit) {
    var primes = [];
    for (var num = 2; num <= limit; num++) {
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;  
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
}
var limit = 50;
console.log("Prime numbers up to " + limit + ": " + findPrimes(limit));
