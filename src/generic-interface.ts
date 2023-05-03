//Generic Interface

interface CrushInterface<T, M = null> {
    name: string,
    husband: T,
    monthlySpent?: M
}
const CrushOne: CrushInterface<boolean> = {name: "Kate Ria", husband: true} 
const CrushTwo: CrushInterface<string> = {name: "Xadia", husband: "Monirul Islam"}

interface IHusbandType {
    name: string
    salary: number
}
const CrushThree: CrushInterface<IHusbandType> = {name: "Monirul Islam", husband: {
    name: "Xadia",
    salary: 5
}}


interface PersonInterface {
    name: string, age: number
}
const CrushFour: CrushInterface<PersonInterface, PersonInterface> = {
    name: "Monirul Islam",
    husband: {
        name: "Xadia",
        age: 14
    },
    monthlySpent: {
        name: "Shopping",
        age: 23
    }
}