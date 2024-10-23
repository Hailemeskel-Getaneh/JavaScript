// here is to try anything in the javascript


const person = {
    firstName: "Hailemekel" ,
    secondName:'Getaneh',
    age :22, 
    fullName : function(){
        return this.firstName + this.secondName;
    }
}

 let name = person.fullName()
 console.log(`my name is ${name}. I am ${person.age} years old.`)