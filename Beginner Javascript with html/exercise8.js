document.getElementById('calculateFactorialButton').addEventListener('click', function() {
    const num = parseInt(document.getElementById('inputFactorial').value);
    let factorial = 1;
    if(num == 0){
        factorial = 1;
    }
    for(var i = 1; i<=num; i++){
        factorial = factorial*i
    }
    document.getElementById('result').textContent = "Factorial: " + factorial;
});

