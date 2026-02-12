// class chai {

//     flavor: string;

//     constructor(flavor: string) {
//         this.flavor = flavor;
//     }
// }
// const masalalchai = new chai("masala");
// masalalchai.flavor = "milk"
// class chai {

//     public flavour: string = "masala"
//     private scretingrdient: string = "cardamom"

//     scretingrdiented(scretingrdient: string) {
//         return this.scretingrdient
//     }

// }
// const masalalchai = new chai();
// masalalchai.scretingrdiented("milk")

// class shop {
//     protected owner: string = "masala"

// }
// class shopowner extends shop {
//     // showowner() {
//     //     return this.owner
//     // }
//     owner = "masala2"
//     shpget() {
//         return this.owner
//     }
// }
// const masalalshop = new shopowner()
// console.log(masalalshop.shpget());


// class modernchai {
//     private _sugar: string = "10g"
//     get sugar() {
//         return this._sugar
//     }
//     set sugar(sugar: string) {
//         this._sugar = sugar
//     }
// }
// const masalalmodernchai = new modernchai()
// masalalmodernchai.sugar = '20g';
// console.log(masalalmodernchai.sugar);
// class piyush {
//     static name: string = "piyu"
// }
// // const piyushh=new piyush();
// console.log(piyush.name);
abstract class piyush2 {
    abstract make(): any;

}
class piyush3 extends piyush2 {
    make23() {
        console.log("make23");
    }
    make(): void {
        console.log("makedew");
    }
}
const piyushh = new piyush3();

piyushh.make23();
