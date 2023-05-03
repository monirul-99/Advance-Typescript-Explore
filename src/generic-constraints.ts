type MandatoryTypes = {
    name: string, age: number, partner: string, salary : number, address: string, profession: string
}

const AddedSomeText = <T extends MandatoryTypes> (input: T) => {
    const oldInfo = {...input}
    const latestName = `My Names is ${oldInfo.name} & My Sweet Partner is ${oldInfo.partner} her address is ${oldInfo.address} and my present salary is ${oldInfo.salary} finally my age is ${oldInfo.age}`
    return latestName
}

type MyInfoTypes = {
    name: string,
    age : number,
    partner: string,
    salary: number,
    address: string,
    profession: string
}

const inputInfo: MyInfoTypes = {
    name: "Monirul islam",
    age : 23,
    salary: 25000,
    partner: "Sadia",
    address: "Naogaon",
    profession: "Front End Developer"
}

const output = AddedSomeText(inputInfo)
console.log(output);