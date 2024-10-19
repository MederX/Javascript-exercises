function sumOfElements(x){
    var sum = 0;
    for(var i = 0; i <= x.length-1; i++){
        sum += x[i];
    }
    return sum
}
console.log(sumOfElements([1,2,3,4]))