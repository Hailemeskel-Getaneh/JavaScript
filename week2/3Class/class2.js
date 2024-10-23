class Car{
    constructor(name , model){
        this.name = name 
        this.model = model
    }
    getInfo(){
        console.log(`Car info: ${this.name} ${this.model}`)
    }
};

const myCar = new Car('Toyota', 'Camry')
myCar.getInfo()