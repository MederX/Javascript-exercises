function Polyndrome(x){
    var y = "";
    for(var i = x.length - 1; i >= 0; i--){
        y += x[i];
    }
    if(x == y){
        return "polyndrome"
    }
    return "not polyndrome"
}
console.log(Polyndrome("madam"))