document.getElementById('reverseButton').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value;
    const reversed = inputString.split('').reverse().join('');
    document.getElementById('result').textContent = "Reversed: " + reversed;
});
