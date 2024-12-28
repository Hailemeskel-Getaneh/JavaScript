/*
Generators are function that can be paused and resumed. They are used to use the iterators in easy ways.
use the * sign to define generators
*/

function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3 ;
}

let myGenerator = numberGenerator();

 function haile(){
    console.log(myGenerator.next())
    console.log(myGenerator.next())
    console.log(myGenerator.next()) // Here the output is { alue:3, done:false }
    console.log(myGenerator.next()) //Her is the output { value:undefined, done:true }
 }

 haile()
 
/*
function* defines a generator function.
yield pauses the function and returns a value.
myGenerator.next() resumes the function from where it was paused and
 continues until the next yield or the end of the function.
*/

