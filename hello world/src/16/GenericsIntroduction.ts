function returnString(val:string):string{
    return val
}
function returnBool(val:boolean):boolean{
    return val
}
function returnNumber(val:number):number{
    return val
}

// here we can use Generics 

function returnType<GenericType>(val: GenericType):GenericType{
    return val;
}

function multipleTypes<T,S>(v1:T,v2:S):string{
    return `val1 = ${v1} , val2 = ${v2}`
}

console.log(returnType<number>(1000))