interface mySettings{
    theme:boolean,
    font:string,
    save():void
}

class myUser implements mySettings{
    // implemetation 
    constructor(private _username:string,public theme:boolean,public font:string){}

    save():void{
        console.log("Saved")
    }
    
    // add method to class
    update = ():void=>{
        console.log("Updated")
    }
    public set username(val:string){
        this._username = val
    }
    public get username():string{
        return this._username
    }
}


let myUser1 = new myUser("us1",true,"Open sans")

myUser1.save()
console.log(`The username : ${myUser1.username}`)