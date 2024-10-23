// This is a task in arrays about an inventory
let inventories = new Array(
    {id:1, name:"Laptop", quantity :4 , price: 50000 },
    {id:2 , name: "smartPhone", quantity: 3 , price:20000},
    {id:3, name: "smartWatch", quantity:2, price: 30000}
);
 
let inventoryName = document.getElementById('inventoryName');
let inventoryId = document.getElementById('inventoryId');
let inventoryQuantity = document.getElementById('inventoryQuantity');
let inventoryPrice = document.getElementById('inventoryPrice');


document.getElementById('addBtn').addEventListener('click', addItem) ;

function print(){
console.log(inventories);
};


let inventory = {};
// add a new inventory with unique id
// use some to check to know the presence of an item at least one

function addItem (){
//    alert('The Add item button is clicked')
    let check = inventories.some((item) => item.id === inventoryId.value)
    if(check){
        console.log('This id already exists');
       alert('This id already exists');
        return ;
    }
    else{
        inventory = {  
            id:inventoryId.value, 
            name: inventoryName.value,
            quantity:inventoryQuantity.value , 
            price:inventoryPrice.value
        };
        inventories.push(inventory);

        // Clear the current inventory list before adding new items
        const inventoryListElement = document.getElementById('inventoryList');
        inventoryListElement.innerHTML = ''; // Clear the existing content

        inventories.forEach((item) => {
        // Create a new list item for each inventory item
        const listItem = document.createElement('li'); // Create a new list item element
        listItem.textContent = item.name;
        inventoryListElement.appendChild(listItem); // Add the new item to the list
        });
        inventoryName.value = '';
        inventoryId.value = '';
        inventoryQuantity.value = '';
        inventoryPrice.value = '';
    }

};


function ClearAll(){
    const inventoryListElement = document.getElementById('inventoryList');
   inventoryListElement.innerHTML = ''; 
}

document.getElementById('removeBtn').addEventListener('click', ClearAll)

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