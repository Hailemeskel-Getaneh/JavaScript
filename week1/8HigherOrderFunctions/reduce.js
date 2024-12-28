
// the reduce() method used to calculate the total and takes two parameters
// you can put the initial part of the total 
console.clear()
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = numbers.reduce(( result, number) =>{
    return result + number ;
}, 0)

console.log(`The sum of the numbers ${numbers} is ${sum}`);