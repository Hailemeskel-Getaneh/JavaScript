/*
 => A Proxy is a special JavaScript object that wraps around another object (called the target) and 
allows you to customize its behavior. 

=> You can intercept operations on the target object, such as property access or assignment, and 
modify how these operations are handled.
*/


// create a target object which is the actual object that can be modified with the proxy and the handler

let myProfile = {
    name:'Hailemeskel Getaneh',
    email:'hailegetaneh1221@gmail.com'
};

// create a handler  object that you can intercept the operations on the target. we will define a 'get' and  a'set' traps
// to log messages when prperties are accessed and modified

const handler = {
          
// creatae a get to retrieve the property of the target object
    get(target , property){
        console.log(`Accessing property: ${property}`)
        return target[property] // return the property value from the actual object
    }
  ,

//create a set to update the property of the target object
    set(target, property, value){
        console.log(`Setting the property ${property} to ${value}`) 
        target[property] = value; // update the property value of the target object 
        return true;  
    }
}


// create a proxy with the target and the handler

const myProxy = new Proxy(myProfile, handler)

//let us access the property of the target

console.log(myProfile.name)

myProxy.name = 'Marti' // setting the property of the target to another value
console.log(myProxy.name)
