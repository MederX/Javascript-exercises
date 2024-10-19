function SortArray(x){
    return x.sort(function(a,b){
        return a-b;
    })

}
console.log(SortArray([16,3,5,2,4,43,5,4,6]))