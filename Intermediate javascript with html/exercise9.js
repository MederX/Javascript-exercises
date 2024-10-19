document.getElementById('checkSubstringButton').addEventListener('click', function() {
    const mainString = document.getElementById('mainString').value;
    const substring = document.getElementById('substring').value;
    if (mainString.includes(substring)) {
        document.getElementById('result').textContent = `"${substring}" is a substring of "${mainString}"`;
    } else {
        document.getElementById('result').textContent = `"${substring}" is NOT a substring of "${mainString}"`;
    }
});
