
//Here the function is anonymous and also there are two event types mouseover and mouseout

let myBtn = document.querySelector('button')

myBtn.addEventListener('mouseover', function(){

    alert('The mouse is overed on the button')
    myBtn.style.backgroundColor = 'red';

});


myBtn.addEventListener('mouseout', function(){
    alert('The mouse is out of the button')
})
