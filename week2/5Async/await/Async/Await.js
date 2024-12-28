// Async/ Await allows to work staightforward with promises
// Async keyword allows to declare ansynchronous function 
// Await keyword allows to pause the asynchronous function until the promise is resolved or rejected

async function fetchData() {
    let data = await somePromse; // waits somePromise to resolve
    console.log(data) // excutes after the somePromise is resolved
    
}


async function getUser(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let student = {name:'Hailemeskel Getaneh', email:'hailegetaneh1221@gmail.com'}
            resolve(student)
        },3000)
    })
} 

async function displayUsers() {
    try{
        let user = await getUser()
        console.log(user)
    }
    catch(error){
        console.error(error)
        
    }
};  
displayUsers() // this function waits 3 sec until the getUser function get excuted