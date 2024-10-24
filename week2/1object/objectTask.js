let campany = {
    name : 'DHEthios Software Campany',
    location : 'Debre Birhan',
    foundationYear: 2020 ,
    numberOfStaff :40,
    owners : [
        {name:'Demissew Getachew', Phone:'+251 919 729 737'},
        {name:'Hailemeskel Getaneh', Phone:'+251 956 319 463'} 
    ],
    getDetails : function(){ 
   return `
        Campany Name: ${this.name} ,
        Location: ${this.location},
        Founding year :${this.foundationYear},
        Number of staff:${this.numberOfStaff},
        owner:${this.owners[0].name}'

    `
    }};
     

let detail = campany.getDetails()
console.log(detail)