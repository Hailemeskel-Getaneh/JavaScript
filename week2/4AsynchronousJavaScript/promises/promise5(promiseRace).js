let promise1 = new Promise((resolve, reject) =>{
setTimeout(resolve, 3000, 'This message is from promise one')
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'This message is from Promise two')

})

Promise.race([promise1, promise2]).then((value) =>{
    console.log(value)
}
)