document.getElementById('removeDuplicatesButton').addEventListener('click', function() {
    const input = document.getElementById('inputNumbers').value;
    const numbers = input.split(',').map(Number);
    var y = new Set(numbers);
    let arr = Array.from(y);
    document.getElementById('result').textContent = "Unique Numbers: " + arr.join(', ');
});


    