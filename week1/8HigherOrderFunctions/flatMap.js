/* here is let us discuss the flatMap() method which is the combination of map and flat
  it applies the function to all the elements (like map ) and flatten the result by one ( depth = 1 the default)

 the basic syntax is :
    array.flatMap(callback(element[, index[, array]])[, thisArg])

callback: A function that is called for every element of the array. 
      Each time, the return value of the callback function is added to the new array.
thisArg: (Optional) Value to use as this when executing callback
*/

let numbers = [1, 2, 3, 4, 5];

let mappedArray = numbers.map(number => [number * 2 ,  number * 3])

console.log(mappedArray) // output: [ [ 2, 3 ], [ 4, 6 ], [ 6, 9 ], [ 8, 12 ], [ 10, 15 ] ]

//let us use the flatMap() to flatten and map  it

let flattenMaped = numbers.flatMap(number => [number * 2, number * 3])

console.log(flattenMaped) //output: [2, 3,  4,  6,  6, 9, 8, 12, 10, 15]

// let us use another example
let sentences = ['Hello Marti How are you?', 'I am Fine']
 let words = sentences.flatMap( word => word.split(' '))
 console.log(words)

