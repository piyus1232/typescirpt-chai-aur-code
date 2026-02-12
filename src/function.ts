function makechai(type:string,quantity?:number,strong?:boolean){
console.log(`make ${type} chai a total of  ${quantity} cup`);

}
makechai("kulhad",2,true)
makechai("masala",3,true)
// function orderchai(order:string){
//     if(!order)return null
//     return order
// }
// function orderchai(order?:string){
//     if(!order)return null
//     return order
// }
function createchai(order:{
    type:string,
    quantity:number,
    strong?:boolean
}):number{
    return 25;
    
}
