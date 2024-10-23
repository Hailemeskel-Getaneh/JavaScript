/*
closure is related with the  scope.
 => variable that are declared  inside the function with let and const are not accessible  outside the function

 Closures occur when a function remembers the environment in which it was created.
This allows the function to access variables from its outer scope even after the outer function has finished executing.

  */

function outerFunction(){

  let outerVarible = 'I am outside of the inner function';
  function innerFunction(){
     console.log(outerVarible);
  }

  return innerFunction;

}

let myInnerFunction = outerFunction();
myInnerFunction()
