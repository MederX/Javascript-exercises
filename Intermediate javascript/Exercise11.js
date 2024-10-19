function Capitalize(x) {
    var y = x.split(' '); 
    var c = "";
    for (var i = 0; i < y.length; i++) {
        c += y[i].charAt(0).toUpperCase() + y[i].slice(1);
        if (i < y.length - 1) {
            c += " ";
        }
    }
    return c;
}
console.log(Capitalize("Hello world and every body"));