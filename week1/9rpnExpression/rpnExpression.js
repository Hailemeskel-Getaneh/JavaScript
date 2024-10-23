/*
Description: Reverse Polish Notation (RPN) is a mathematical notation in which every operator follows all of its operands. 
Your task is to implement a simple RPN calculator using the reduceRight() method. 
The input will be an array of strings, where each string is either a number or an operator (+, -, *, /).


*/

let rpnExpression = ['3', '4', '+', '2', '*', '7', '/'];

let result = rpnCalculator(rpnExpression);
console.log(result)