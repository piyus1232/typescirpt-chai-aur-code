"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let r = "piyush";
let numl = r;
const inputelement = document.getElementById("username");
// if( inputelement instanceof HTMLInputElement){
// console.log(inputelement.value);
// }
console.log(inputelement.value);
let value;
value = 55;
value = "piysuij";
value = true;
console.log(value.toUpperCase());
let value2;
value2 = 55;
value2 = "piysuij";
value2 = true;
if (typeof value2 === "string") {
    console.log(value2.toUpperCase());
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log(error);
}
const data = "piyush";
const strdata = data;
function redirectbasedonrole(params) {
    if (params == "admin")
        return true;
    if (params == "user")
        return false;
    return params;
}
function neverreturn() {
    while (true) {
        console.log("piyush");
    }
}
//# sourceMappingURL=moretypes.js.map