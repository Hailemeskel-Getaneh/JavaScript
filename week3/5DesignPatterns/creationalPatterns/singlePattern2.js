// here is another example of single pattern but this is the same as the first example

class mySingleton{
    constructor(){
        if(!mySingleton.instance){
            mySingleton.instance = this;

        }
        return mySingleton.instance
    }

  logMessage(){
    console.log('This is the singleton instance')
  }  

}


const instance1 = new mySingleton();
const instance2 = new mySingleton();

console.log(instance1 === instance2)

console.log(instance1.logMessage())