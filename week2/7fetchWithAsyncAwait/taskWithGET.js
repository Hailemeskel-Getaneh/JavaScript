async function getData(url = ''){
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
    }
    catch(error){
        console.log(error)

    }
}

getData('https://jsonplaceholder.typicode.com/users/4')


// alternate for the above function of async/ await

// The following work the same with the above but it lacks readiblity. 
// remove the comment in the .then() method to run it

function getData(url){
    return new Promise((resolve, reject) =>{

        setTimeout(() =>{
            let response =   fetch(url);
             response.ok = true;
            if(response.ok){
                resolve(response)
            }

            else{
                reject('something went wrong')
            }
        },2000);

    })
}
getData('https://jsonplaceholder.typicode.com/users/4').then((response) =>{
    return response.json()
} ).then((data) =>{
    // console.log(data)
}).catch(err => console.log(err))