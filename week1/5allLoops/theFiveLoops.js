// There are five loops in javascript
console.clear()
let students = ['Hailemeskel',"Marti" , "Elias", "Selamawit", "Hailemariam", "King"]
let i = 0

for(; i<students.length ; i++){
    console.log(students[i].trim())
}

 i = 0
while(i< students.length){
    console.log(students[i]);
    i++;
}

// the do while 
 i = 0
do {
 console.log(students[i])
 i++
}
while(i < students.length)

    // the for of loop  returns all the list in the array
console.log('the for of loop starts here')
    for( student of students){
        console.log(student)
    }
console.log('the for of loop ends here')


// the for in returns the index of the lists in the array

for ( index in students){
    console.log(`${index} : ${students[index]}`)
}