"use strict";
let Array1 = [1, 2, 3];
let Array2 = ["A", "B", "C"];
// we want an array that hold's both string and number vals
let Array3 = [...Array1, ...Array2];
console.table(Array3);
// we want an array that hold's strings, numbers and arrays of string
let Array4 = [...Array3, ["C", "D"]];
console.table(Array4);
//# sourceMappingURL=TypeAnnotationsWithMultidimensionalArrays.js.map