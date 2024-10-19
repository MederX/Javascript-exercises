function factorial(x){
    var y = 1;
    if(x == 0){
        return 1;
    }
    for (var i = 1; i<=x; i++){
        y = y * i;
    }
    return y
}
console.log(factorial(12))