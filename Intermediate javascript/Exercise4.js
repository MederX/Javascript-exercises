function countWords(x){
    var wordsArray = x.toLowerCase().split(/\s+/);
    var wordsCount = {}
    for (var i = 0; i <= wordsArray.length-1; i++ ){
        var word = wordsArray[i];
        if (wordsCount[word]){
            wordsCount[word]++;

        }
        else{
            wordsCount[word] = 1
        }
    }
    return wordsCount;
}
var text = "black people and white people are not the same people white";
console.log(countWords(text))