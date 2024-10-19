document.getElementById('findLargestButton').addEventListener('click', function() {
    const input = document.getElementById('inputNumbers').value;
    const numbers = input.split(',').map(Number);
    const largest = Math.max(...numbers);
    document.getElementById('result').textContent = "Largest: " + largest;
});
