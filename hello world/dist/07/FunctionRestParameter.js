"use strict";
// how to pass to function an udefined number of parameters => rest param
function buildSelectReq(tableName, ...columns) {
    const REQ = `select ${columns.toString()} from ${tableName}`;
    return REQ;
}
console.log(buildSelectReq("user", "id", "name"));
//# sourceMappingURL=FunctionRestParameter.js.map