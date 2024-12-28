let myBtn = document.getElementById('myBtn');
let name = document.querySelector('.name');
let email = document.querySelector('#email');
let user = {}

function getData(){

console.log('Your message is submitted successfully')
 user['Name'] = name.value;
 user['Email'] = email.value;

 console.log(user)
 name.value = '';
 email.value = ' '

}



// additional things on the click event to identify the event type and target

myBtn.addEventListener('click', getData)


let secondBtn = document.querySelector('#secondBtn');
secondBtn. addEventListener('click', function(event){
    console.log('The Click me button is cliked');
    console.log('the Event type is ', event.type)
    console.log('The Event target is ', event.target)
    alert('check the console for the more details')
})




//
let colors = ['blue', 'red', 'green', 'black', 'pink', 'Yellow', 'gray'];


function changeColor(index , seconds){
  setTimeout(() => {
    document.getElementById('clickMeBtn').style.backgroundColor = `${colors[index]}`
  
},seconds)
}


document.getElementById('clickMeBtn').onclick =  function(){
  
  document.getElementById('clickMeBtn').style.fontSize = '22px';
  document.getElementById('clickMeBtn').style.borderRadius = '9px';
  document.getElementById('clickMeBtn').style.color = 'white';

  let initailTime = 1000
  for(let i=0; i < colors.length; i++){
    changeColor(i, initailTime)
    initailTime = initailTime + 2000

    
  }




}