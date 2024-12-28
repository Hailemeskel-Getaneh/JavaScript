//here are some of the string metho
let myName = 'Hailemeskel Getaneh';
let string  = 'My name is'

console.log(myName.length);

console.log(myName.charAt(2));//output : i

console.log(myName.indexOf('m')); // 5

console.log(myName.at(-2)) // e

console.log(myName.toUpperCase()) // HAILEMESKEL GETANEH

console.log(myName.toLowerCase()) // hailemeskel getaneh

let firstName = myName.slice(0, myName.indexOf(''))
console.log(firstName); //Hailemeskel

let introduction = string.concat(' ', myName);
console.log(introduction) // My name is Hailemeskel Getaneh


let myString = ' Hello From java Script ';
console.log(myString.trim()) // removes space from beggining and starting 

console.log(myString.trimStart()) // removes the whitespce from the beginning
console.log(myString.trimEnd()) // removes the whitespace the end of the string


console.log(myString.repeat(2));

let replacedString = myString.replace('java Script ', 'type script')

console.log(replacedString)

//
console.log(myName.includes('Haile')) // helps for search functionality