/*
Iterators are objects that provide a way to access elements of a collection one by one,
 without exposing the underlying structure.

The Symbol.iterator method: 
         This method must be implemented for an object to be iterable. It returns an iterator object.
         use Symbol.iterator at index of your array
*/

let myArray = [1, 2, 3];

let myIterator = myArray[Symbol.iterator]();


console.log(myIterator.next()) 
console.log(myIterator.next())
console.log(myIterator.next()) // here the output is {value:3 , done:true}
