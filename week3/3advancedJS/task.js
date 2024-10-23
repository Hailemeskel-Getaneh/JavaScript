// This the generator function of the task
// We use the .next() method for both the iterator and generator

function* generatorFunc (){
    yield 'The first yield of the Generator' ;
    yield 'The second yield of the Generator' ;
    yield 'The third yield of the Generator';
    yield 'The fourth yield of the Generator';
    yield 'The Fifth yield of the Generator' ;
    
}

let gen = generatorFunc();

 let print = () =>{
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next())
 }

//  print()

//let us use the iterators with the array 
let myArray =  ['Haile', 'Marti', 'Love']
let Life = myArray[Symbol.iterator]()

console.log(Life.next())
