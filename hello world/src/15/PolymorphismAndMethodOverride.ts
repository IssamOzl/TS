class Player{
    constructor(public name:string){}
    attack ():void{
        console.log("attacking now")
    }
}

class Amazon extends Player{
    constructor(name:string, public spears:number){
        super(name)
    }

    // Polymorphism 
    // attack(): void {
    //     super.attack()
    //     this.spears-=1;
    // }

    // override 
    // noImplicitOverride in tsconfig changed to true

    override attack(): void {
        console.log("Attacking with spears")
        this.spears --
    }
}

let am1 = new Amazon("Am1",30)
am1.attack()
console.log(am1.spears)