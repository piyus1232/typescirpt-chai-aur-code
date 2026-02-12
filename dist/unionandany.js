"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "Rkffk";
let airlineseat;
airlineseat = "middle";
const orders = ["44", "34", "24", "67"];
let Currentorder;
for (let order of orders) {
    if (order === "34") {
        Currentorder = order;
        break;
    }
}
console.log(Currentorder);
// exhaustive check
function getchai(kind) {
    if (typeof kind == "string") {
        return `${kind} chai`;
    }
    return `order: ${kind}`;
}
function orderchai(size) {
    if (size == "smmall") {
        return "small chai";
    }
    if (size == "medium" || size == "large") {
        return "large chai";
    }
    return `order: ${size}`;
}
//# sourceMappingURL=unionandany.js.map