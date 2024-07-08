interface User{
    id:number,
    username:string,
    country:string,
    // method
    sayHello():string,
    // with arrow function
    sayWelcome: ()=> string,
}

let user:User = {
    id:1,
    username:"user1",
    country:"Morocco",
    sayHello(){return `HELLO ${this.username}`},
    sayWelcome:()=>{return "welcome"}
}

//console.log(user)

interface Settings{
    readonly theme :string,
    font : string
}

// add options to the interface
interface Settings{
    sidebar?:boolean
}

let page1 : Settings = {
    theme:"dark",
    font:"open sans",
   // sidebar:false
}

//page1.theme =  "test"

// etends
interface Moderator extends User {
    role : string | number
}

let moderator : Moderator = {
    
    id:1,
    username:"user1",
    country:"Morocco",
    sayHello(){return `HELLO ${this.username}`},
    sayWelcome:()=>{return "welcome"},
   role:"moderator"
}

//console.log(moderator)

interface Admin extends Moderator{
    protected:boolean
}

let admin : Admin = {
    
    id:1,
    username:"admin",
    country:"Morocco",
    sayHello(){return `HELLO ${this.username}`},
    sayWelcome:()=>{return "welcome"},
   role:"admin",
   protected : true
}