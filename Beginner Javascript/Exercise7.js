function countVowels(x){
    var count = 0;
    var vowels = "aeiouAEIOU";
    for(var i = 0; i< x.length; i++){
        if (vowels.includes(x[i])){
            count++
        }
    }
    return count;
}
console.log(countVowels("Hello"))