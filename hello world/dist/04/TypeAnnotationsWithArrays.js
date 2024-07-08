"use strict";
// we want a variable that is typed and holds a value either string or number !
let strOrNum;
strOrNum = 10; // ok
strOrNum = "test"; // ok
//strOrNum = true // ko
let lng = ["php", "python", "c"];
// KO
//let lng : string[] = ["php","python","c",10]
for (let val of lng) {
    console.log(val);
}
//# sourceMappingURL=TypeAnnotationsWithArrays.js.map