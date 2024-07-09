abstract class Food{
    constructor(public title:string){}
    public abstract getCookingTime():void
}

class Pizza extends Food{
    constructor(title:string, public price:number){
        super(title)
    }
    public getCookingTime():void{
        console.log("Cooking time for pizza is 30 min")
    }
}