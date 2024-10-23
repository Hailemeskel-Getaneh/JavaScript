/*
Polymorphism allows objects of different classes to be treated as objects of a common superclass. 
It is often implemented via method overriding.
*/


class Animal{
    constructor(name){
        this.name = name ;
    }

    speak(){
        console.log(`${this.name} barks`)
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const cat = new Cat('Whiskers');
const  dog = new Animal('Rex')
const animals = [dog, cat];

animals.forEach(animal => animal.speak());    /* this lines means
                dog.speak() which is the instance of the Animal class
                cat.speak() whihc is the instance of the Cat class and gets the name from the animal calss

*/
