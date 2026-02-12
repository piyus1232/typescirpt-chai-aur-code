const masalachai: string[] = ["adrak", "masala", "kadak"];
const city: Array<number> = [1, 2, 3];
type chai = {
    masala: string;
    city: number;
}
const cafe: chai[] = [
    {
        masala: "masala",
        city: 1
    },
    {


        masala: "kadak",
        city: 2
    }
]
cafe.push({
    masala: "kadak",
    city: 3
}, {
    masala: "milk",
    city: 4
})
const office: readonly number[] = [1, 2, 3, 4, 5];
// office.push()

let chaitupel: [number, string, boolean] = [1, "masala", true];
let location: readonly [number, number] = [5, 10];
// location.push()
let chaitype: [name: string, city: number] = ['masala', 1];
enum cupsize {
    SMALL,
    MEDIUM,
    LARGE,

}
function orderchai(size: cupsize) {
    if (size == cupsize.SMALL) {
        return "small chai"

    }
    if (size == cupsize.MEDIUM) {
        return "medium chai"

    }
    if (size == cupsize.LARGE) {
        return "large chai"

    }
}
enum status {
    PENDING = 5,
    INPROGRESS = 6,
    COMPLETED
}
console.log(status.COMPLETED);
