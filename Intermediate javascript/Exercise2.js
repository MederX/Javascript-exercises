function validateEmail(x){
    var y = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return y.test(x);
}
console.log(validateEmail("john.doe@example.com"));
console.log(validateEmail("john.doe@example"));