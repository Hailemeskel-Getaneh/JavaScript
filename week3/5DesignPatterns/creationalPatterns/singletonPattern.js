/*
 singleton-pattern : Ensures a class has only one instance and provides a global point of access to it.
 this is useful when one method is== is needed to coordinate the whole systen
*/





class Singleton{
         constructor(){
            if(!Singleton.instance){
                Singleton.instance = this
            }
            return Singleton.instance;
         }

         logMessage(){
            console.log('Singleton instace is created')
         }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
instance1.logMessage()

console.log(instance2 === instance1)

