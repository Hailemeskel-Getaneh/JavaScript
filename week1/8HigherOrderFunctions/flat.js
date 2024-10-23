/*

The flat() method in JavaScript is used to flatten an array, 
   which means it reduces the nesting of arrays by a specified depth. 
By default, flat() flattens an array by one level.

flat([depth]) is optional the default is 1 and 
   the depth can be 1, 2, 3 ... and also infinity

*/

let numbers = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]

function flattening(){
    
    let flattened = numbers.flat() // here the depth is 1 or this is flattening by one level
    console.log(flattened)  // output: [1, 2, 3, 4, 5, 6, [7, 8, 9]]
}

flattening();

// when the depth is 2
console.log(numbers.flat(2))  // [1, 2, 3, 4, 5, 6, 7, 8, 9]



// here is another is another example
let nums =[1, [2, [3, [4, [, 5, [6, [7, [8 , [9, [10]]]]]]]]]];

let flattenedArray = nums.flat(Infinity) // her infinity is the depth that means it flattens all the nested arrays
console.log(flattenedArray)


