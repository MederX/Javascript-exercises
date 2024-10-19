document.getElementById('countButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const wordsArray = inputText.toLowerCase().split(/\s+/);
    const wordsCount = {};
    for (var i = 0; i < wordsArray.length; i++) {
        var word = wordsArray[i];
        if (wordsCount[word]) {
            wordsCount[word]++;
        } else {
            wordsCount[word] = 1;
        }
    }
    document.getElementById('result').textContent = JSON.stringify(wordsCount);
});


