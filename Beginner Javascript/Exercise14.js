function removeDuplicates(x){
    var y = new Set(x);
    let arr = [];
    for (i of y){
        arr.push(i);
    }
    return arr.join(' ')
}
console.log(removeDuplicates([11,22,33,33,44,44,44]))
    