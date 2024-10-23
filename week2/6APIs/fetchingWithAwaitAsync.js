async function fetchData(){
    try{
 const response = await fetch('https://jsonplaceholder.typicode.com/posts/3')
  const data = await response.json()
 console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

fetchData()