
// here is an example of higher order that is not built in rather i have created it.


function GreetingUser(greetingFunction){
        const user = 'Marti';
        greetingFunction(user);
};

function sayHello(name){
    console.log(`${name} , I love you too  much!!`)
}

GreetingUser(sayHello);