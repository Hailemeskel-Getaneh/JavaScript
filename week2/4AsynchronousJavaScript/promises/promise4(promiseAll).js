// handling multiple promises using Promise.all

let promise1 = Promise.resolve(10);
let promise2 = 24
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'Hello From javaScript promise course')
})

Promise.all([promise1, promise2, promise3]).then((values) =>{
    values.forEach(value =>{
        // console.log(value)

    })
})

//another example for the promise.all

let promise4 = fetch('https://jsonplaceholder.typicode.com/posts/4')
let promise5 = fetch('https://jsonplaceholder.typicode.com/posts/5')
let promise6 = fetch('https://jsonplaceholder.typicode.com/posts/6')


Promise.all([promise4, promise5, promise6])
.then(responses => Promise.all(responses.map( response => response.json())) )
.then( data => console.log(data))
.catch(err =>{
    console.error(err)
})

Promise.race([promise4, promise5])
.then(response => response.json())
.then(data => {
    // console.log(data)
}
)
.catch(error => console.log(error))
