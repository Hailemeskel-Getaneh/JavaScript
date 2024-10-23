// the keywords, call , applay and bind are used to  work with the 'this' method 

function Greeting(){
    console.log(this.name)
}

const person1 = { name: 'Hailemeskel'}
const person2 = { name :'Marti'}
const ourWord = { name : 'I love you'}

Greeting.call(person1); // output Hailemskel b/c puts this as a paramenter to the Greeting Function
Greeting.apply(person2)  // this also works like the call method


let wordGreeting = Greeting.bind(ourWord);// Bind also works like the call and apply but it returns a function
 wordGreeting()


