// There are different ways of using fuctions

// function declaration

 function greeting(firstName, secondName){
    console.log("Hello " + firstName," " + secondName)
 }

 // expression using the finction as a variable

 let myFunc = function() {
    console.log('This is function expression')
 }

 // arrow function 
 let greeting = (firstName, secondName) =>{
    console.log(`Hello ${firstName} ${secondName}, This is arrow function`)
 }

 /* Note:
    => a varaible declared inside a function with let keyword is not accessed out side the function
    => you can return values in the function
    => you can use default parameters in your function if parameters are not passed

 */