/*
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It's like a placeholder for a value that you expect to get in the future, usually after some asynchronous operation like fetching data from a server.

2. Why Use Promises?
Avoid Callback Hell: Promises help to avoid the complexity and difficulty of reading nested callbacks, also known as "callback hell."
Chaining: Promises allow you to chain multiple asynchronous operations together in a more readable way.
Error Handling: Promises provide a way to handle errors that may occur during asynchronous operations.
*/

/*
3. The Three States of a Promise
A Promise has three states:

Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation was completed successfully.
Rejected: The operation failed.

*/

let myPromise = new Promise((resolve, reject) =>{
    let seccess = true;

    if(seccess){
        resolve('The operation was Completed successfully');
    }
    else{
        reject('The opeartion Faild');
    }
})


myPromise.then((message) =>{
    //.then() handles the message which is successful
    console.log(message);
    // message is the text inside the resolve
}).catch((error) =>{
    // .catch handles the error 
    console.log(error)
    //error is the text inside the reject
});