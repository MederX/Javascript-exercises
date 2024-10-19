document.getElementById('countVowelsButton').addEventListener('click', function() {
    const input = document.getElementById('inputVowels').value.toLowerCase();
    count = 0
    const vowels = "aeiouAEIOU";
    for (var i = 0; i < input.length; i++){
        if (vowels.includes(input[i])){
            count++
        }
    }
    document.getElementById('result').textContent = "Vowel count: " + count;
});

