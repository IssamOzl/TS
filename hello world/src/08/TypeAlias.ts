// you can add alias to type

type str = string;
let myName:str = "test1"
myName ="test2"

// that was not very useful
// ok let's try this :

type strOrNum = str|number
let myVar:strOrNum = 10
myVar = "string val"


// more ! ok
type Button = {
    up:string,
    down:string
}

function getActions(btn:Button){
    console.log("up :"+btn.up)
    console.log("down :"+btn.down)
}

getActions({up:"Jump",down:"Get down"})


// and more
type allBtns = Button &{
    right:string,
    left:string
}
function getAllActions(myBtn:allBtns){
    console.log("up "+myBtn.up)
    console.log("down "+myBtn.down)
    console.log("right "+myBtn.right)
    console.log("left "+myBtn.left)
}