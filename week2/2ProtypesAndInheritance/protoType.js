// in JavaScript , every object has a prototype . prototype is an object
//It means an object inherits features from another object
// When you try to access a property on an object and it doesn't have it,
// JavaScript will look for that property on the object's prototype.

function person(name, age){
    this.name = name,
    this.age = age
}

person.prototype.greet = function(){
    console.log('Hello ', this.name)
}

let Haile = new person("Hailemeskel Getaneh", 22)
Haile.greet()


