class Car{
    static getNextVin(){
        return Car.nextVin++;
        //this.nextVin++ 을 해도 되지만
        //Car을 사용해 정적 메서드라는 점을 상기시켜준다.
    }
    constructor(make, model){
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }
    static areSimilar(car1, car2){
        return car1.make === car2.make && car1.model === car2.model;
    }
    static areSame(car1, car2){
        return car1.vin === car2.vin;
    }
}
Car.nextVin = 0;

const car1 = new Car("Tesla", "S");
const car2 = new Car("Mazda", "3");
const car3 = new Car("Mazda", "3");

car1.vin;
car2.vin;
car3.vin;

console.log(Car.areSimilar(car1, car2)); //False
console.log(Car.areSimilar(car3, car2)); //True
console.log(Car.areSame(car2, car3));    //False
console.log(Car.areSame(car2, car2));    //True