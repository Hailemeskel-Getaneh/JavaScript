// IIFE means an Immediatley Invoked Function Expression . It is called after it has been declared.
// the () at the end of the function calls it .

//simpel sample

(function(){
    console.log("I am an IIFE")
})()


// another more advanced 
const Counter = ( function(){

    let myNum = 0;

    return {

        increament: function(){
            myNum++
            return myNum;
        },

        decreament: function(){
            myNum--
            return myNum;
        }
    }

})()


let a = Counter.increament()
console.log(a)
console.log(Counter.increament())