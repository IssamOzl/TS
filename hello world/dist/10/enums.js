"use strict";
var lev;
(function (lev) {
    lev[lev["easy"] = 10] = "easy";
    lev[lev["medium"] = 5] = "medium";
    lev[lev["hard"] = 2] = "hard";
})(lev || (lev = {}));
const lvl = "easy";
if (lvl == lev[lev.easy]) {
    console.log("the time you have for easy mode is ", lev.easy);
}
//# sourceMappingURL=enums.js.map