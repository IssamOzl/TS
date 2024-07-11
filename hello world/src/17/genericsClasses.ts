class myObj<T = string>{
    constructor(public val:T){}
    showMsg(msg:T):void{
        console.log(msg)
    }
}

// add string val
let ob1 = new myObj<string | number>("Sam")
console.log(ob1.val)
ob1.showMsg("Message")
ob1.showMsg(10)


