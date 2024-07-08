"use strict";
/*
  Type Annotations With Functions

  idn tsconfig.json
  
  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/
let showMsg = true;
// in params if you don't specify a type = an error => noImplicitAny
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
    }
    // if you skipped this line = error => noImplicitReturns
    return `No Data To Show`;
}
console.log(showDetails("test", 40, 5000));
//# sourceMappingURL=TypeAnnotationsWithFunction.js.map