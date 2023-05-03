//Array Function

const createArray = <T>(param: T): T[] => {
    return [param]
}

const result = createArray<string>("Bangladesh")
const result2 = createArray<boolean>(true)

interface INameInterface{name: string, age: number}
const result3 = createArray<INameInterface>({name: "Monirul", age: 23})
// console.log(result3);


const createArrayTwo = <X,Y>(param1: X, param2: Y): [X,Y] => {
    return [param1, param2]
}

const output1 = createArrayTwo<string, number>("Monirul", 99)
const output2 = createArrayTwo<boolean, Array<string>>(true, ["BD", "USA", "UK", "UAE"])

interface INameInterface{name: string, age: number}
const output3 = createArrayTwo<INameInterface, number>({name: "Monirul", age: 23}, 99)
// console.log(output2);

//spread Operator
const addMEInMyCrushMind = <T> (Info: T) => {
    const crush = "Xadia"
    const newData = {...Info, crush}
    return newData
}
const myInfo = {
    name: "Monirul Islam",
    age: 23,
    salary: 100
}

const output4 = addMEInMyCrushMind(myInfo)
console.log(output4);