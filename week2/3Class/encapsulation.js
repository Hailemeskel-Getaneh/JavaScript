/* Encapsulation involves hiding the internal state of an object and 
requiring all interaction to be performed through an object's methods. */


class bankAccount{
    #balance; // this is the private field

// create a constructor of the function that you can recieve parameters for this class
    constructor(initialAmount){
        this.#balance = initialAmount;
    }

    // create a method for making a deposit
    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
        }
        else{
            console.log('The amount should be positive number')
        }
    }

    // create a method for making withdraw
    withdraw(amount){
        if(amount > 0 && amount < this.#balance){
            this.#balance = this.#balance - amount
        }
        else{
            console.log('Your balance is insufficient')
        }
    }


    //create a method for the  
    showBalance(){
        console.log('Your balance is :', this.#balance)
    }


}

const HaileAccount = new bankAccount(100);
HaileAccount.deposit(100000)

HaileAccount.showBalance()
HaileAccount.withdraw(1999292999)