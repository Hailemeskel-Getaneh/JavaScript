// reduceRight works like reduce but it processes the array from the right

let words = ['world', ' ','Hello'];

let sentence = words.reduceRight((mySentence, word) => {
    mySentence = mySentence + word;
    return mySentence

});
console.log(sentence) 

// Let Us see another example

let numbers = [1, 2, 3, 4, 5 ,6];

let sum = numbers. reduceRight((result, number) =>{
    result = result + number ;

    console.log(number)
    return result
}, 0) //here is 0 is the initial value of the result
console.log('The sum of the above numbers is :', sum)