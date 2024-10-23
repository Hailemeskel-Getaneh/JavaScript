
let data = {
    name : 'Hailemeskel Getaneh'
    , age :22
}

let handlerObj = {

    get(targ, pro){
        console.log(`Getting ${pro}`)
        return Reflect.get(targ, pro) // Default behavior
    }
,
    set(target, prop, value){

     console.log(`Setting the ${prop} to ${value}`)
       return Reflect.set(target, prop, value); // Default behaviour
    }
}

let myProxy = new Proxy(data, handlerObj);
console.log(myProxy.name);
myProxy.name = 'Haile';
