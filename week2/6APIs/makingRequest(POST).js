// this is the post http request 


// fetch(uri, Options)  ===> this is the basic syntax

fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'POST',
    header:{
       ' content-type':'application/JSON'
    },
    body:JSON.stringify(
        {
            name:'Hailemeskel Getaneh',
            age:22,
            email:'hailegetaneh1221@gmail.com'
        }
    )
})
.then((data) => data.json())
.then((data) =>{
    console.log(data)
}).catch((errro)=>{
    console.error(error)
})

