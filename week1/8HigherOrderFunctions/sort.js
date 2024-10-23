
let numbers = [1, 2, 3, 4, 9, 5, 6, 7]
numbers.sort() //sort the items
// print()

let students = new Array ("Abebe", "Selamawit", "Hailemeskel", "King","ayele") // This is called array constructor

students.sort() // this sorting is not case sensetive
students.sort((a, b) => a.localeCompare(b)) // this is case sensetive sorting


//Here is another example

let inventories = new Array(
    {id:1, name:"Laptop", quantity :4 , price: 50000 },
    {id:2 , name: "smartPhone", quantity: 3 , price:20000},
    {id:3, name: "smartWatch", quantity:2, price: 30000}
);
 
function print(){
console.log(inventories);
};


// Sort the inventories by price

function sortInventory(order){
    inventories.sort((a, b) =>{
        return order ==="asc" ? a.price - b.price : b.price - a.price;
    })
}

sortInventory("asc")
print()