async function postData(url , data){
    let response = await fetch(url ,{
        method:'POST',
        header:{
           ' content-type' : 'Application/json'
        },
        body: JSON.stringify(data)
    }
)
return response.json()

}
postData('https://jsonplaceholder.typicode.com/users/4', {name:'Hailemeskel Getaneh'}).then((data) =>{
    console.log(data)
})