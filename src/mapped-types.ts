//sample mapping
const arrayOfNumbers = [1,2,4]
const arrayOfString = arrayOfNumbers.map((num) => num.toString())
console.log(arrayOfString);


type Volume = {
    height : String,
    width : number
    depth: number
}

type Area<T> = {
    // [key in "height" | "width"] : number // Manually
    //[key in keyof Volume] : number // Dynamically
    //[key in keyof Volume] : Volume[key]
    readonly [key in keyof T] : T[key]
}

const AreaOne : Area<{height: number, width: number}> = {height: 10, width: 39}
//AreaOne.height= 34

type AreaString = {
    height : string;
    width : string
}

type AreaReadOnly = {
    readonly height : number,
    readonly width : number
}
const rectangularArea : AreaReadOnly = {
    height: 10,
    width: 34
}
// rectangularArea.width=30
// const obj = {
//     name : "Monirul Islam",
//     age : 23,
//     address : "Naogaon"
// }

// console.log(obj["address"]);

type A = Volume['width'] //Look Up Type
type B = keyof Volume    // 'width' 'height'
