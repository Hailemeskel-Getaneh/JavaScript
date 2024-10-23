/*
this refers to the object that is currently calling the function. Its value can change depending on the context:

Global Context: In the global scope, this refers to the global object (window in browsers).
Object Method: Inside a method, this refers to the object the method is called on.
Arrow Functions: Arrow functions do not have their own this. They inherit this from the surrounding context.

Example:
*/
const person = {
    name: 'John',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet();  // Output: Hello, my name is John