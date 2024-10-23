// This is a task in arrays about an inventory

let inventories = new Array(
    {id:1, name:"Laptop", quantity :4 , price: 50000 },
    {id:2 , name: "smartPhone", quantity: 3 , price:20000},
    {id:3, name: "smartWatch", quantity:2, price: 30000}
);
 
function print(){
console.log(inventories);
};



let inventory = {};
// add a new inventory with unique id
// use some to check to know the presence of an item at least one

        function addItem (id , name, quantity, price){
            let check = inventories.some((item) => item.id === id)
            if(check){
                console.log('This id already exists');
                return ;
            }
            inventory = {id:id, name: name, quantity:quantity , price:price};
            inventories.push(inventory);

        };

        addItem(4, "airPhone", 4, 500);

        // print()

// remove an inventory from the inventories list

        function removeItem(id){
            let check = inventories.some((item) => item.id == id)
            if(check){
            inventories.forEach((item, index) =>{
                if(item.id == id){
                inventories.splice(index, 1 )
                }
            })
            }
            else{
                console.log("The item does not exist to remove")
            }
        };

        // removeItem(3)
        // removeItem(1)
        // print()

// update the quantity of inventory from the inventories

        function updateQuantity(id, newQuantity){
            let founded = inventories.find(item => item.id == id)
            if(founded){
                inventories.forEach((item,index) => {
                    if(item.id == id){
                        item.quantity  = newQuantity;
                    }
                }) 
            }

            else{
                console.log("the item does not found with this id")
            }
        }

        updateQuantity(2, 10);
        // print()

// calculate the total price of the inventories

        function calculateTotal(){
        let total =   inventories.reduce((total, item) => total += item.price * item.quantity , 0)
            console.log(total);
        };

        // calculateTotal()

        // find the inventory with low stock or with low quantity with specified threshold

        function lowStock(threshold){
            let lowStocked = inventories.filter(item => item.quantity < threshold);
            console.log('Low stocked items :', lowStocked)
        };

        // lowStock(4)
        // print()

// Sort the inventories by price

        function sortInventory(order){
            inventories.sort((a, b) =>{
                return order ==="asc" ? a.price - b.price : b.price - a.price;
            })
        }

        sortInventory("asc")
        print()