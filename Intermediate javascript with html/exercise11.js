document.getElementById('capitalizeButton').addEventListener('click', function() {
    const sentence = document.getElementById('inputSentence').value;
    const capitalizeWords = (str) => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const capitalizedSentence = capitalizeWords(sentence);
    document.getElementById('result').textContent = "Capitalized Sentence: " + capitalizedSentence;
});
