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
    toString(){
        return `${this.make} ${this.model}: ${this.vin}`;
    }
}
Car.nextVin = 0;

class InsurancePolicy{};
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();

function makeInsurable(o) {
    o[ADD_POLICY] = function (p) {
        this[_POLICY] = p;
    }
    o[GET_POLICY] = function () {
        return this[_POLICY];
    }
    o[IS_INSURED] = function () {
        return !!this[_POLICY];
    }
}

makeInsurable(Car.prototype);
const car1= new Car();
console.log(Car.prototype);
// car1.ADD_POLICY(new InsurancePolicy());
