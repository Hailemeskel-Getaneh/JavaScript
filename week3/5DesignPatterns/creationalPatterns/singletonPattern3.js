

class Database{
    constructor(){
        if(!Database.instance){
            this.connection = this.createConnection()
            Database.instance = this;
        }
        return Database.instance
    }

    createConnection(){
        console.log('creating database connection...')
        return {}
    }

    getConnection(){
        return this.connection;
    }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2);
console.log(db1.getConnection() === db2.getConnection())