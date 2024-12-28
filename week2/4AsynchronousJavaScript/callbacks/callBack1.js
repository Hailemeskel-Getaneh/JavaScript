/*
javaSCript is a single threaded , meaning it can excute a single operation at a time. So that
Asynchronous javascript allows you to perform long-running programs(like network request, fetching data from APIs) with out
blocking the main thread. enabling your application to stay responsive.
=> For time taking actions
=> one function is used as a parameter of the other function because it should be called after the other function is done

Donot use () to call the callback inside the other function just use the name of the callback
*/

// callbacks


function fetchData(callback){
    setTimeout(() =>{
      const  data = {name: 'Hailemesekel', ID:'DBU!501246'}
        callback(data)
    },1000)
}
fetchData((data) => {
    console.log('Data recieved', data)
})


