let subs : number | string = "Rkffk";
let airlineseat :  'aisle' | "middle" |"window"
airlineseat = "middle"
const orders =["44","34","24","67"]
let Currentorder:string | undefined;
for(let order of orders){
    if(order === "34"){
        Currentorder = order
        break
    }
}
console.log(Currentorder);
// exhaustive check
function getchai(kind : string | number){
    if(typeof kind=="string")
    {return `${kind} chai`}
    return `order: ${kind}`
}
function orderchai(size : "smmall" | "medium" | "large" | number){
    if(size=="smmall")
    {return "small chai"}
  if(size== "medium" || size== "large")
    {return "large chai"}
  return `order: ${size}`
}
