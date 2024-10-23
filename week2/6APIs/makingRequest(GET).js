/*
What is an API?

An API is a set of rules and tools that allow different software applications to communicate with each other. 
In web development,
 APIs often allow your frontend to communicate with backend services or third-party services.
Types of APIs:

REST APIs: Representational State Transfer (REST) is a popular type of API that uses standard HTTP methods (GET, POST, PUT, DELETE) to perform operations.
GraphQL APIs: A more flexible API that allows clients to request specific data structures.
How Web APIs Work:

Web APIs typically work by sending an HTTP request to a server, which then processes the request and sends back a response, usually in JSON format.

*/

//we use fetch API which is the modern for aking request which returns when it resolves request


// The following is the  GET request

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response ) => response.json() // parse the jeson from the response

)
.then((response) =>{
    console.log(response)
})
.catch(error => console.error(error))