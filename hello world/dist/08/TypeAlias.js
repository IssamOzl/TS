"use strict";
// you can add alias to type
let myName = "test1";
myName = "test2";
let myVar = 10;
myVar = "string val";
function getActions(btn) {
    console.log("up :" + btn.up);
    console.log("down :" + btn.down);
}
getActions({ up: "Jump", down: "Get down" });
function getAllActions(myBtn) {
    console.log("up " + myBtn.up);
    console.log("down " + myBtn.down);
    console.log("right " + myBtn.right);
    console.log("left " + myBtn.left);
}
//# sourceMappingURL=TypeAlias.js.map