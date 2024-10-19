var car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2015,
}
console.log('Initial object', car);
car.engine_volume = 1.8;
console.log("After adding new prperty", car);
car.make = "BMW";
console.log("After changing existing property", car);
delete car.model;
console.log("after deleting existing propery", car)
