let myPromise = new Promise((resolve, reject) =>{
    throw new Error('Something went wrong')
})
myPromise.then((result) =>
     console.log(result)
)
.catch((error) =>{
    console.error('Error :', error.message)
})