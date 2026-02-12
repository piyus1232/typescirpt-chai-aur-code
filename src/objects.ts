// this is declartion of object structure
let chai :{
    type:string,
    quantity:number,
    strong:boolean
    
}

chai ={
    type:"",
    quantity:5,
    strong:true
}
type teaa ={
    milk:number,
    water:number,
    coffee:string[]
}
const cup :teaa={
    milk:55,
    water:54,
    coffee:["black","white"]
}
type cup={
    size:string
}
let smallcup:cup ={size:"200ml"}
let bigcup ={size:"500ml",material:"stainless steel"}
smallcup=bigcup
type chai ={
    type?:string,
    quantity?:number,
    strong?:boolean
}
// const updatechai=(updates:Partial<chai>)=>{

// console.log(updates);


// }
const updatechai=(updates:Required<chai>)=>{

console.log(updates);


}

updatechai({strong:false ,type:"kulhad",quantity:5})

