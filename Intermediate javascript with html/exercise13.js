document.getElementById('cloneObjectButton').addEventListener('click', function() {
    const input = document.getElementById('inputObject').value;
    const original = JSON.parse(input);
    const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
    const cloned = deepClone(original);
    document.getElementById('result').textContent = "Cloned Object: " + JSON.stringify(cloned);
});

