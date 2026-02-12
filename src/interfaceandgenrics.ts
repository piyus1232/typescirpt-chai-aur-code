// interface chai{
//     type:string,
//     flavor:string,
//     quantity?:number,
//     strong?:boolean
// }

// class cafe implements  chai{
//     type= "chai";
//     flavor="milk";
//     quantity= 5;
//     strong= true;
// }
// const cafe:chai={
//     type:"chai",
//     flavor:"milk",
//     quantity:5,
//     strong:true
// }
interface teamachine{
    start():void;
    stop():string;

}

class car implements teamachine{
    start(): void {
        console.log("started");
        
    }
    stop(): string {
        return "stopped";
    }
    
}
function Box<T>(a:T,b:T):T{
    return b;
    
}
Box("piyush","piyush")
interface chai<T>{
    type:string,
    flavor:T,
    quantity?:number,
    strong?:boolean
}

const cafe:chai<string>={
    type:"chai",
    flavor:"milk",
    quantity:5,
    strong:true
}