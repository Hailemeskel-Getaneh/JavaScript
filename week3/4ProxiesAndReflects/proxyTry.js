// This is the an example of proxy

let userProfile = {
    name:'Agonafir Arega',
    age:65
};

// let us create the handler for the intercepting the operations on the target object

let handlerObject = {
    get(target, property){
        return target[property]; // retrieve the property but do not use target.property
    }
,

    set(target, property, value){
           target[property] = value // update the property but do not use  target.property = value
        return true; //indicating the success
    }
}

//let us create a new proxy

let myProxy = new Proxy(userProfile, handlerObject)
console.log(myProxy.name) //

myProxy.name = 'Hailesilassie Selamu';
console.log(myProxy.name)