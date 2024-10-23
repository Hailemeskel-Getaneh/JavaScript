

// java script variables name can start with the $ sign 

let $$ = 'Hailemeskel Getaneh';
let $ = 'Marti';


console.log($$, ' ', ' loves ', $)

let myFunc = async () =>{
    let $user = await fetch('https://jsonplaceholder.typicode.com/posts/1')

    let result = await $user.json();
     console.log(result)
};

myFunc()