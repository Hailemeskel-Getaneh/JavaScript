const target = {
    name: 'Marti'
};

const handler = {
    get(target, property) {
        console.log(`Getting ${property}`);
        return Reflect.get(target, property);  // Default behavior
    },
    set(target, property, value) {
        console.log(`Setting ${property} to ${value}`);
        return Reflect.set(target, property, value);  // Default behavior
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name);  // Output: Getting name, Marti
proxy.name = 'Martiye';  // Output: Setting name to Martiye
