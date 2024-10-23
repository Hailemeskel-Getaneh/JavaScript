// switchs are also the types of the control statements


let data = 5343;

console.log(typeof(data))

switch(typeof(data)){
   case  "string" :
     console.log("The Data you enterd is string");
     break;
   case "number":
      console.log("Your data is number ");
      break;
   case "boolean":
       console.log("Your data is boolean data type");
       break ;
   case "symbol":
      console.log("Your data is collection of symbols");
       break;
   case "undefined":
       console.log("your data i undefined");
       break;
   case "object":
      console.log("your data is an object")
      break ;
   default:
      console.log("This is a premium to identify the data type")
}