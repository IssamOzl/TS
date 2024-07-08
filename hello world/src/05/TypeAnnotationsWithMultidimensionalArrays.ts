let Array1 :number[] = [1,2,3]
let Array2:string[] = ["A","B","C"]

// we want an array that hold's both string and number vals
let Array3:(string|number)[] = [...Array1,...Array2]
console.table(Array3)

// we want an array that hold's strings, numbers and arrays of string
let Array4:(string|number|string[])[] = [...Array3,["C","D"]]
console.table(Array4)