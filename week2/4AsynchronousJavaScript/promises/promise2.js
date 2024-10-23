function fetchData(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const data = {name:'Hailemeskel Getaneh', email:'hailegetaneh1221@gmail.com'}
            let success = false;

            if(success){
                resolve(data)
            }
            else{
                reject('Error: the operation failed!!')
            }
        }, 3000)
    })
}

fetchData().then((data) => {
    //.then() candles the successful case
    console.log(data)
    //data is the content inside the resolve
}).catch((error) =>{
    //.catch() handles the errors
    console.log(error)
    // error is the message or the text inside the reject
})