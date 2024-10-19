document.getElementById('evenOddButton').addEventListener('click', function() {
    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    const result = inputNumber % 2 === 0 ? "Even" : "Odd";
    document.getElementById('result').textContent = "Result: " + result;
});

