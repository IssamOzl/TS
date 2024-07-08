// make the same as .js file with .ts won't work

function f_add (n1:number,n2:number):number {
    return n1+n2
}

console.log(f_add(5,10))

// won't work
//console.log(f_add(5,"10"))

// also won't work, because the return type of f_add is number
//let res:string = f_add(5,10)

let res:number= f_add(5,10)
console.log(res)