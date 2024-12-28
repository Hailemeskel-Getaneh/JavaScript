//this is the ternary operator
let isStudent = false;
let response  = isStudent ? 'yes I am a student': 'No I am not a student';

//console.log(response)


let salary = 12000; // Example salary value

let tax = salary > 10000 
    ? function a() {
        return salary * 0.9;
    }()  // Call the function immediately
    : function b() {
        return salary * 0.5;
    }();  // Call the function immediately

console.log(tax); // Outputs the tax amount based on the salary

// let I try it using the arrow function

let score = 90; // Example salary value
let sex = 'Female'

let totalMark = sex.toLowerCase() === 'female'
    ? (() => score + 5)()  // Immediate invocation of arrow function
    : (() => score + 0)(); // Immediate invocation of arrow function

console.log(totalMark); // Outputs the tax amount based on the score



// DONOT FORGET TO CALL THE FUNCTION IMMEDIATLY AFTER THE DECALARATION