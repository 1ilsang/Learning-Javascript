class Vehicle{
    constructor(){
        this.paasengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p){
        this.paasengers.push(p);
    }
}
class Car extends Vehicle{
    constructor(){
        super();
        console.log("Car created");
    }
    deployAirbags(){
        console.log("BWOOSH!");
    }
}

const v = new Vehicle();
v.addPassenger("1ilsang");
v.addPassenger("sangchul");
console.log(v.paasengers);
const c = new Car();
c.addPassenger("CUK");
console.log(c.paasengers);
//v.deployAirbags(); //ERR
c.deployAirbags();