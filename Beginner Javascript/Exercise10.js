function Calculate(a,b,operation){
    switch(operation){
        case "add":
            return a+b;
        case "substract":
            return a-b;
        case "multiply":
            return a*b;
        case "divide":
            if (b === 0){
                return "Couldn't divide by 0";
            }
            return a/b
        default:
            return "Invalid operator"
    }
}
console.log(Calculate(10, 5, "add"));       
console.log(Calculate(10, 5, "subtract"));  
console.log(Calculate(10, 5, "multiply"));  
console.log(Calculate(10, 5, "divide"));    
console.log(Calculate(10, 0, "divide"));    





