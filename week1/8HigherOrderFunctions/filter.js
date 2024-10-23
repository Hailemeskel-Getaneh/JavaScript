
//filter() is used to filter the elements of an array to based on some condition



let users = [
    {name:'Hailemeskel Getaneh', age:22},
    {name :'Martiye yenemar', age:17},
    {name:'Demissew Getachew', age:23},
    {name:'Selamawit Demissew', age:4},
    {name:'Abel Hailemeskel', age:5}

]

let adults = users.filter(user =>user.age > 18)
console.log('Adults : ', adults)

// another example
let children = [];

users.filter(user => {
  
    if(user.age < 18){
        children.push(user.name);
    }

})

function print(){
    console.log(`Non-Eligible students for voting are: `)
    for( let child of children){
        console.log(`  - ${child}`)
    }
}

print()
       

