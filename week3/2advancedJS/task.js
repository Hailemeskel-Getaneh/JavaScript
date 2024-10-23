// this task is used to demonstrate the keywords , call , apply and bind with the 'this' method
//They are used to pass the object to the function as shown below

function userData (){
    console.log(` Name: ${this.name} \n Email:${this.email} \n`)
}


let user1 = {name : 'Hailemeskel Getaneh', email:'hailegetaneh1221@mail.com'};
let user2 = { name: 'Martemuz Zemedkun', email:'martimar1221@gmail.com'};
let user3 = { name:'Demissew Getachew', email:'demisgech@gmail.com'}

userData.call(user1);
userData.apply(user2);

let myBrother = userData.bind(user3);
myBrother()
