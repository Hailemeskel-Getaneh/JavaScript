
// the second example of callback function
function Greeting(name, department, theCallbackFunction){
    
    console.log('hello every one , name is ' , name , 'I am studying ', department);
   theCallbackFunction()
}

function thanks(){
    console.log('Good Bye!!')
}

// Greeting('Hailemeskel', 'software engineering', thanks)

