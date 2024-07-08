// class Usr{
//     username:string;
//     salary:number;
//     msg: ()=> string;

//     constructor(username : string,salary:number){
//         this.username = username
//         this.salary = salary
//         this.msg = ()=>{return `Username : ${this.username}, salary : ${this.salary}`}
//     }
// }

class Usr{
    static cnt:number = 0
    static getCount ():void{
        console.log(`${this.cnt} users created`)
    }
    msg: () => string
    //msg : ()=> string
    //msg():string
    constructor(private _username : string,private salary:number){
        this.msg = ()=>{return `Username : ${this._username}, salary : ${this.salary}`}
        Usr.cnt++
    }

    public get username():string {
        return this._username
    }
    public set username(val:string){
        this._username = val
    }
}

let usr2:Usr = new Usr("user2",178)
console.log(usr2.username)


let usr1  = new Usr("user1",6532)
console.log(usr1.msg())

Usr.getCount()