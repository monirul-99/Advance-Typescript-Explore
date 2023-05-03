type PersonTypes = {
    name : string,
    age : number,
    address : string
}

type newTypes = "name" | "age" | "address" // manually process
const a: newTypes = "name"

type newTypeUsingKeyOf = keyof PersonTypes // smart process
const b: newTypeUsingKeyOf = "name"

// Y = "name" | "age"
function getProperty<X,Y  extends keyof X>(obj: X, key: Y){
    obj[key]
}

const property = getProperty({name: "Mr. X", age : 100}, "age")