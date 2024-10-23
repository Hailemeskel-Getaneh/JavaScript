//another example of callback

function getUserInfo(delay){
    const user = { name :'Marti', age:21 , department:'medicine'}
    setTimeout(() =>{
        delay(user)
    },5000)
}

getUserInfo((user) =>{
    console.log('My love', user)
});

