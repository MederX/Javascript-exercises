document.getElementById('checkAnagramButton').addEventListener('click', function() {
    const str1 = document.getElementById('inputString1').value.toLowerCase().replace(/\s+/g, '');
    const str2 = document.getElementById('inputString2').value.toLowerCase().replace(/\s+/g, '');
    const sortString = (str) => str.split('').sort().join('');
    if (sortString(str1) === sortString(str2)) {
        document.getElementById('result').textContent = "They are anagrams!";
    } else {
        document.getElementById('result').textContent = "Not anagrams.";
    }
});
