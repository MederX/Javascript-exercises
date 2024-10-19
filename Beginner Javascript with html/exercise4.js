document.getElementById('convertButton').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('inputCelsius').value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result').textContent = celsius + "°C = " + fahrenheit + "°F";
});
