async function postData(uri = '', data = {} ){
  try{
        let response = await fetch(uri, {
            method:'POST',
            header:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        } );

        let result = await response.json();
        console.log(result)
  } 

  
 catch(error) {
    console.log(error)

  }
};

postData('https://jsonplaceholder.typicode.com/posts',{
    name:'Hailemeskel Getaneh',
    email:'hailegetaneh1221@gmail.com'
})