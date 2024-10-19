function areAnagrams(str1, str2) {
    var cleanedStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    var cleanedStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
    if (cleanedStr1.length !== cleanedStr2.length) {
        return false;
    }
    var sortedStr1 = cleanedStr1.split('').sort().join('');
    var sortedStr2 = cleanedStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
var str1 = "Listen";
var str2 = "Silent";
console.log(areAnagrams(str1, str2));  
