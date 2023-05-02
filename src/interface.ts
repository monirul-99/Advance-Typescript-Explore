// it use for primitive type of data
type User = {
    name : string;
    age : number
}

//this is made by union & intersection
type extendUser = User &  {
    role : string
}

// it use for object type of data
interface IUser{
    name : string;
    age : number
}

//Interface Convenience || You can extend extra types
interface IExtendedUser extends IUser {
    role : string
}

//object function array --> special convenience type of object
//Alias Type Process
type addNumberType = (num1: number, num2: number) => number

//Interface Type Process
interface IAddNumberType {
    (num1: number, num2: number) : number
}
//call with union type 
//Better Advice: You can use union type for Func bcz union type is more readable, clean compare to interface type 
const addNumbersUnion: addNumberType = (num1, num2) => num1 + num2
//call with Interface type
const addNumbersInterface: IAddNumberType = (num1, num2) => num1 + num2

//Alias Type
type rollNumbersType = number[]
//Interface Type
interface IRollNumberType {
    [index: number] : number
}
//build to Alias
const rollNumbersAlias: rollNumbersType = [1, 2, 4]
//Build to interface
const rollNumbers: IRollNumberType = [1, 2, 4]


const userWithTypeAlias: extendUser = {
    name: "Type Alias",
    age : 1000,
    role: "Backend Developer"
}

const userWithTypeInterface: IExtendedUser = {
    name: "Type Interface",
    age : 1000,
    role: "Front-End Developer"
}
