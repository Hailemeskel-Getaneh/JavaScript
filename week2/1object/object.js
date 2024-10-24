//declaration of an o bject

        // 1. using object literal
        let student = {
            name:'Hailemeskel Getaneh',
            age : 21,
            job : 'student',
            department : 'software Engineering',
            year: 2
        }

        // 2. using the new key word
        let person = new Object({name:'Abel Ayalew', age : 30, isStudent: false, job:'Doctor'})
        let girl = new Object({name:'Martiye', age:18, department:'Medicine'})
        // console.log(person.name)
        console.log(`I love ${girl.name} too much`)

        // 3. Using the constructor function

        function inventory(name, quantity, price ){
            this.name = name,
            this.price = price,
            this.quantity = quantity
        };

        let Laptop = new inventory('Laptop', 3, 50000)
        let Charger = new inventory('charger', 5, 500)

        let inventories = [];
        inventories.unshift(Laptop, Charger)


        // console.log(inventories)

// Acessing the elements of an object

        //1. Using the dot notation
                // console.log(Laptop.price)
                // console.log(student.name)

        //2. Using the bracket notation. Donot forget to use quetation to access
                // console.log(person['name'])
                // console.log(Charger['quantity'])

// updating the element of an object
            person.name = 'Hailesilassie';
            Laptop.quantity = 12 ;
            // console.log(person)

//Deleting the content of and object's property
            delete person.isStudent;
            //   console.log(person)


// Looping through the elements of an object
function printingObjects(){
    for(let key in student){
        console.log(key +' : '+student[key])
    }
}
          

// Methods in an object and nested objects
//Note: methods are function which are values of the prroperties of an object
            let campany = {
                name : "HM Software center",
                Location: 'Debre Birhan',
                staffNumber : 30,
                manager : {name: 'Demissew Getachew',
                        Phone: '+251 919 729 737',
                        Address : 'Addis Ababa'
                },

                foundingMembers :[
                    'Hailemeskel Getaneh', 'Demissew Getachew'
                ],
                greeting : function(){
                    console.log(`Hell from  ${this.name}`)
                }
            };
            // campany.greeting()
            // console.log(campany.manager.name)



// using the obeject.entities() to display the obejct

for ( let [key, value] of Object.entries(student)){
    console.log(`${key} : ${value}`)
}

// using the object.values()
let myObject = Object.values(student) ;

console.log(myObject) // output:[ 'Hailemeskel Getaneh', 21, 'student', 'software Engineering', 2 ]