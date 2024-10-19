document.getElementById('flattenButton').addEventListener('click', function() {
    const input = document.getElementById('inputArray').value;

    let arrayInput;
    try {
        arrayInput = JSON.parse(input); 
        if (!Array.isArray(arrayInput)) {
            throw new Error("Input is not a valid array");
        }
    } catch (error) {
        document.getElementById('result').textContent = "Invalid input, please enter a valid array.";
        return;
    }
    const flattenedArray = arrayInput.flat(Infinity);

    document.getElementById('result').textContent = "Flattened Array: " + JSON.stringify(flattenedArray);
});

