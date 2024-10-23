import calculator from "./calculator.mjs";
import { addition, subtraction } from "./calculator.mjs";

let sum = addition(5, 8);
let  difference = subtraction(88, 23);

let product = calculator(7, 8, '*');
let quotient = calculator(454, 24, '/')

console.log(` sum : ${sum} \n Difference :${difference} \n Product :${product} \n Quotient:${quotient}`);