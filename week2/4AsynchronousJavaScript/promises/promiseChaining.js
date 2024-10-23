/* NNNNBBBB : if you want to return something from one .then() to the next .then(), 
 you should not use brace or you shuould use the return keyword if you want to use the 
 curl brace and  have other two or more lines of codes otherwise nothing will be returned to the next .then

*/

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then(data =>{
    console.log(data)
    return fetch('https://jsonplaceholder.typicode.com/posts/2')
})
.then(response =>{
     return response.json()
}).then( data =>{
    console.log(data)
})

.catch(error =>
    console.log(error)
)

