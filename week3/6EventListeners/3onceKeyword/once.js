
// The 'once' keyword allows the event listener to remove to event type
//  the 'this'  keywords indicates the elment where the event is applied

let myDiv = document.querySelector('div');

myDiv.addEventListener('click', function(){
    console.log("the div is clicked")
    console.log(this)
    this.style.backgroundColor = 'red';
}, {once : true})


//tip: you can use the this.innerHTML of the a given element of  html 