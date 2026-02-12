let r :any ="piyush"
let numl :string =(r as string)
const inputelement = document.getElementById("username") as HTMLInputElement
// if( inputelement instanceof HTMLInputElement){
// console.log(inputelement.value);
// }
console.log(inputelement.value);
let value :any;
value=55
value="piysuij"
value=true
console.log(value.toUpperCase());
let value2 :unknown;
value2=55
value2="piysuij"
value2=true
if(typeof value2==="string"){
    console.log(value2.toUpperCase());
}
try {
    
} catch (error) {
if(error instanceof Error){
    console.log(error.message);
    
}
    console.log(error);
    
}
const data:unknown = "piyush"
const strdata :string = data as string
type role = "admin" | "user" |"super admin"
function redirectbasedonrole(params:role){
    if(params == "admin")return true;
    if(params=="user")return false;
    return params

}
function neverreturn ():never{
    while(true){
console.log("piyush");

    }
}
