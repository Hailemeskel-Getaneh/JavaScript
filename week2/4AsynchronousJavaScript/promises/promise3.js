/* This is the promise chaining example

*/

new Promise((resolve, reject) =>{
    setTimeout(() => resolve(10), 3000)
})
.then((result) =>{
    console.log(`The  first then loogs ${result}`)
    return result*2
}
).then(result => {
    console.log(`The second the loggs ${result}`)
    return result * 3
}). then((result) => {
    console.log(`The third then loggs ${result}`)
}).catch( error =>{
    console.log('The Operation failed')
})


/*
Explanation:
First Promise: Resolves with the value 10.
First .then(): Takes 10, logs it, and returns 20.
Second .then(): Takes 20, logs it, and returns 60.
Chaining: Each .then() receives the result from the previous .then().
Error Handling: If any part of the chain fails, the .catch() will handle the error.
*/