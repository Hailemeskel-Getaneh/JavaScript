
document.getElementById('submitBtn').onclick = function(){
    async function fetchData(){
        let fullName = document.getElementById('fullName').value;
        let Email = document.getElementById('email').value;
    
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                let data = [{name:fullName, email:Email},
                        //    {name:'Demissew Getachew', email:'demisgetch@gmail.com'},
                        //    {name:'Martemuz Zemedkun', email:'marti21@gmail.com'}
                ]
                resolve(data)
                reject('something went wrong')
            }
    ,1000
            )
        })
    }
    
    async function getUser(){
        try{
             let data = await fetchData()
             console.log(data)
             alert('your data is successfully submited')
        }
        catch(error){
            console.log(error)
        }
    }
    
    
    getUser()

document.getElementById('fullName').value ='';
 document.getElementById('email').value = '';

}
