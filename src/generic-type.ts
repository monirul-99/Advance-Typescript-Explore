type GenericArray<T> = Array<T>

//Something Look Like Functions Parameters
const rollNumbersAsNumber:GenericArray<number> = [1,3,4]
const rollNumbersAsString: GenericArray<string> = ["Nothing","Something","Anything"]
const rollNumbersAsBoolean:GenericArray<boolean> = [true, false]


type NameRollType = {name: string, roll: number}

const userNameAndRollNumbers: GenericArray<NameRollType> = [
    {name: "Monirul", roll: 2},
    {name: "Sadia", roll: 1},
]

type GenericTuple<X, Y> = [X,Y]
type RelationType = {
    name: string, salary: number
}

interface IRelationType {
    name: string,
    salary: number
}

const relation:GenericTuple<string, string> = ["Persian", "kate Ria"]
//Not Good Practice BCZ object inside any data provide
const nearByRelation:GenericTuple<RelationType, string> = [{name: "Monirul", salary: 25000}, "Front-End Developer"]

//Good practice
const goodRelation:GenericTuple<IRelationType, string> = [{name: "Monirul", salary: 25000}, "Front-End Developer"]