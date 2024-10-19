document.getElementById('sumArrayButton').addEventListener('click', function() {
    const input = document.getElementById('inputNumbers').value;
    const numbers = input.split(',').map(Number);
    var sum = 0;
    for(var i = 0; i <= numbers.length-1; i++){
        sum += numbers[i];
    }
    document.getElementById('result').textContent = "Sum: " + sum;
});

