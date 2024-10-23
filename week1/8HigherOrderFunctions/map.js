// here is an example of map();

// the map function apply the condition through out all the elements 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squared = numbers.map( num => Math.pow(num, 2));
let multiplied = numbers.map(num => num * 2)

console.log(`Squared Numbers : ${squared}`)
console.log(`Multiplied Numbers : ${multiplied}`)

//here is another example

let users = [
    {name:'Hailemeskel Getaneh', age:22},
    {name :'Martiye yenemar', age:20},
    {name:'Demissew Getachew', age:23},
    {name:'Selamawit Demissew', age:4},
    {name:'Abel Hailemeskel', age:5}

]

let ages = [];
let names = []


users.map(user => {
    for( let key in user){
        if(key === 'name'){
            names.push(user[key])
        }
        else{
            ages.push(user[key])
        }

    }
  

})
console.log(names)
console.log(ages)