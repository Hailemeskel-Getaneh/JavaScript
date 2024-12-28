
// This is the generator with the async and await 
//Generators can simplify asynchronous programming by managing asynchronous operations in a more synchronous style.

function* asyncFunction(){
    const data1 = yield fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
    console.log(data1);
    const data2 = yield fetch('https://jsonplaceholder.typicode.com/posts/2').then(res =>res.json());
    console.log(data2);

}


 let gen = asyncFunction();

 
 gen.next().value.then(result => {
    gen.next(result).value.then(result => {
        gen.next(result);
    });
});
