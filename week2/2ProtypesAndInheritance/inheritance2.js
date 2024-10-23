// parental constructor function or object
function Animal(name){
    this.name = name
}

// create a methods for the Animal parent constructor function or prototype

Animal.prototype.speak = function(){
    console.log(`${this.name} makes noiese`)
}

Animal.prototype.walk = function(){
    console.log(`${this.name} walks`)
}

Animal.prototype.eat = function(food){
    console.log(`${this.name} likes to eat ${food.foodName}`)
}
// create a child class or constructor function or object

function Dog(name ,bread){
    Animal.call(this,name) // call the parent function or class
    this.bread = bread

}

// set up the inheritance or link the two constructor functions using Object.create() method
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;  // restoring the Dog constructor to be Dog rather than Animal

// create a method for the the Dog

Dog.prototype.bark = function(){
    console.log(`${this.name} barks always`)
}

// cretae instance for the Dog child function 

let ajire  = new Dog('Ayalew', 'the best')
ajire.bark() //method of the Dog function

//the following are method of the parent and they are inhrited from the parent constructor function
ajire.speak()
ajire.walk()
ajire.eat({foodName:'meat'})