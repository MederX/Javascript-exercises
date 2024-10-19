document.getElementById('convertButton').addEventListener('click', function() {
    const num = document.getElementById('inputNumber').value;
    const str = num.toString();
    document.getElementById('result').textContent = "Type: "+typeof(str)+" "+"("+str+")"
});

