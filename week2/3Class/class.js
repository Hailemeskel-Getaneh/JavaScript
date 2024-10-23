//here the object oriented course of javascript and like the inheritance in prototype

//create a class

class Student {
    //create the special method
    constructor(name, age, id,department){
        this.name = name
        this.age = age
        this.id = id
        this.department = department
    }

    //create methods for the class
    introduction(){
        console.log(`my name is ${this.name}. I am ${this.age} years old.`)
    }
    
    studies(){
        console.log(`I am currently studying ${this.department}`)
    }

}

const Haile = new Student('Hailemsekel Getaneh', 22, 'DBU1501246', "Software Engineering") // the special method is called here
Haile.introduction()
Haile.studies()