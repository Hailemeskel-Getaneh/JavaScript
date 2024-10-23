/* some elements like <a> has deafult behavior they applied with out the event listener is applied
  other like the form will be summitted automatically so that we can prevent is using:
    event.preventDefault()


   ==> Remember that the submit event is used only on the form 
    if you to select a btn is clicked you should the click event type BUT

         the button in Your html should be type of submit like type="submit"

*/

//let us see an example
let name = document.getElementById('name')
let email = document.getElementById('email')

 document.querySelector('.myForm').addEventListener('submit', function(event){

  event.preventDefault()
  try{
      if(name.value ===' ' || email.value === ''){
        
        alert('Please Fill our all the fields!')
  
      }
      
      else{
        let user = {name : name.value, email: email.value}
        console.log(user)
        name.value = '';
        email.value = '';
        alert('Successful Submited')
    }
  }

  catch(error){
    console.log('ERROR:', error)
  }

});

