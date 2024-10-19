function ReverseString(a){
    var string = "";
    for (var i = a.length - 1; i >= 0; i--) {
        string+=a[i];
        
    }
    return string;
}
console.log(ReverseString("hello"));