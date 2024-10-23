// this is not the matter for this section but it is highly related with this course
// this is the course in OOP of javascript but it is related with the prototypal inheritance


//parent class
class Person{
    constructor(name){
        this.name = name
    }
//method for the parent class
    speak(){
        console.log(`${this.name} can speak and communicate with others`)
    }
}

// child class

class Student extends Person{
    constructor(name , study){
        super(name) // calling the parent class
        this.study = study 
    }

    // method for the child class
    studies(){
        console.log(`${this.name} studies ${this.study}`)
    }
}

//create instance for the child class

let abel = new Student('Abel', 'Software Enginneering');
abel.speak() // method of the parent class
abel.studies() //method of the child class
