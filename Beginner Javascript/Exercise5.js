function compare(a,b){
    return a-b;
}
function largestNumber(x){
    var y = x.sort(compare);
    return y[y.length - 1 ]
}
console.log(largestNumber([72,5,2,1,5,3,6,2]))



