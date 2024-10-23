// declaring an array in two ways

let numbers = [1, 2, 3, 4,,9, 5, 6, 7]
numbers.sort() //sort the items
// print()

let students = new Array ("Abebe", "Selamawit", "Hailemeskel", "King","ayele") // This is called array constructor

students.sort() // this sorting is not case sensetive
students.sort((a, b) => a.localeCompare(b)) // this is case sensetive sorting

//console.log(numbers[numbers.length -1])

numbers[2] = 21;
// print()         //check this function below

students.forEach( student => {
    //console.log(student);
});

//let us discuss the array methods 

function print(){
    console.log(numbers)
};

let length = numbers.length // returns the length of the array

numbers.push(8); // add an element to the array to the end of the array
// print()

numbers.pop() // removes the last element of the array
// print()

numbers.shift(100) // removes the first element of the array
//print()

numbers.unshift(9,11,18)  //adds one or more element to the beginning of the array
// print()

let Sliced = numbers.slice(3, 5) // cuts the array based on the give indices. here 3 and 5
//  console.log(Sliced)

        let odds = []
        numbers.map(number =>{
            if( number % 2 !== 0)
                odds.push(number) ;

        });

        // print()
        // console.log(odds)


// Let us discuss the amazing method is called splice
// it is a powerful array method for adding, removing and replacing the elements of the array

            let removedNumbers = numbers.splice(3, 2) // starting from index 3 it removes two elements
            //   console.log(removedNumbers)
            //  print()
             
            numbers.splice(3, 0, 77, 88 , 99) // starts at index 3 removes 0 elements and adds 77,88 and 99 at indices 3, 4, 5 respectively
          
            //    print()
            numbers.splice(1,1 ,'Haile') //starts at index 1 removes one element and adds Haile at that index in another word it replace the item at idex of one
            // print()

            numbers.splice(7) // starting from the given index it removes all the elements after that index
            // print()

            numbers.splice(-2,3) // starting from the index -2 back removes 3 elements
            // print()



// arrayName.includes(element) helps to know whether the elemnt found in that array or not
// it returns either true or false
            console.log(numbers.includes(96))

//let I discuss about two dimenstional arrays
        let matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]

        // console.log(matrix[2][0])