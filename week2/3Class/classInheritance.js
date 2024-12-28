// this is the inheritance class

//create the parent class
class Vehicle{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
    start(){
        console.log(`${this.make} ${this.model} is starting`)
    }
    stop(){
        console.log(`${this.make} ${this.model} is stopping`)
    }
}

//creating the derived class named Car using the extends keyword which helps it to inherit from the parent class

class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year) // calling the super class
        this.doors = doors
    }
  honk(){
    console.log(`${this.make} goes beep beep`)
  }
}


const myCar = new Car('Honda', 'civic', 2024, 4);
myCar.start()
myCar.stop()
myCar.honk()