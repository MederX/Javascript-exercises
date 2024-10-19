document.getElementById('uniqueButton').addEventListener('click', function() {
    const input = document.getElementById('inputArray').value;
    const array = input.split(',').map(Number);
    
    const uniqueValues = [...new Set(array)];
    document.getElementById('result').textContent = "Unique Values: " + uniqueValues.join(', ');
});
