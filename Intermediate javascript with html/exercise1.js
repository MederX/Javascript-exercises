document.getElementById('sortButton').addEventListener('click', function() {
    const input = document.getElementById('inputArray').value;
    const numbers = input.split(',').map(Number);
    const sortedNumbers = numbers.sort(function(a,b){
        return a - b;
    });
    document.getElementById('result').textContent = "Sorted Array: " + sortedNumbers.join(', ');
});


