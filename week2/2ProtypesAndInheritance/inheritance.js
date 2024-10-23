// let us talk about inheritance in javascript
// prototypal inheritance is defferent from other inhertance like classical inheritance look it.
// it is a way of accessing the methods and properties of an object

function User(name , email){
    this.name = name ,
    this.email = email
}

// this or the following is  also and objectof function or prototypal object
User.prototype.login = function (){
    console.log(`User ${this.name} has logged in`)
}

function Admin(name, email , role){
    User.call(this, name, email) // call the parent class 
    this.role = role;
}

Admin.prototype = Object.create(User.prototype) // linking the two objects so that Admin can access the user methods and prototypes
Admin.prototype.constructor = Admin; //restoring from admin ptototype form being used for the user so that you can create any prototype using the Admin constructor for the admin object

Admin.prototype.deleteUser = function (user){
    console.log(`${this.name} deleted ${user.name} `)
}

let abc = new Admin('Abel Tamiru', 'abel12@gmail.com', "superAdmin" )
abc.login()
abc.deleteUser({name:'Etalem'})


