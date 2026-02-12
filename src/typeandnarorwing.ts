import number = require("framer-motion")
import types = require("framer-motion")

class kulchadchai{
    serve(){
        return `kulchad chai`
    }
}
class gingerchai{
    serve(){
        return `ginger chai`
    }
}
class masalachai{
    serve(){
        return `masala chai`
    }
}
function servechai(chai: kulchadchai | gingerchai | masalachai){
    if(chai instanceof kulchadchai)return chai.serve()
    if(chai instanceof gingerchai)return chai.serve()
    if(chai instanceof masalachai)return chai.serve()
}

type chaiorder={
    type:string,
 orderno:number

}
function ischaiorder(obj:any):obj is chaiorder{
    console.log("yes");
    
    return (typeof obj==="object" && typeof obj.type==="string" && typeof obj.orderno==="number")
        
    

   
}
let obj1={
    type:"kulchad",
    orderno:"9"
}

if (ischaiorder(obj1)) {
  // TS now knows x is chaiorder inside this block
  console.log(obj1.orderno);  // no error
}