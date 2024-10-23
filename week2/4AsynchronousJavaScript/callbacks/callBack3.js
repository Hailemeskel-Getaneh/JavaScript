//here in the above example(example 2) , the thanks function is done immediately after the body of the Greeeting function is done
// let us put the time the second function is done after the first is completed

function fetchUserData( callback){

    console.log('fetching the data from the APIs...')
    setTimeout(() =>{
        const user = {name:'Hailemeskel', department:'Software Engineering'}
        callback(user)
    },3000)
}

function consoleTheUserInfo(user){
    console.log(user)
}

fetchUserData(consoleTheUserInfo)

