//Mocking Function That mean no fetch data from server
const makePromiseString = ():Promise<string> => {
    return new Promise <string>((resolve, reject) => {
        const data : string = "Data is Fetched"
        if(data){
            resolve(data)
        } else {
            reject("Failed To Fetch")
        }
    })
}

const makePromiseBoolean = ():Promise<boolean> => {
    return new Promise <boolean>((resolve, reject) => {
        const data : boolean = false
        if(data){
            resolve(data)
        } else {
            reject("Failed To Fetch")
        }
    })
}

interface IObjectInterface{
    data: string
}
const makePromiseObject = ():Promise<IObjectInterface> => {
    return new Promise <IObjectInterface>((resolve, reject) => {
        const data : IObjectInterface = {data: "data fetch successfully!"}
        if(data){
            resolve(data)
        } else {
            reject("Failed To Fetch")
        }
    })
}

const getPromiseData = async(): Promise<string> => {
    const data = await makePromiseString()
    return data
}

const getPromiseDataBoolean = async(): Promise<boolean> => {
    const data = await makePromiseBoolean()
    return data
}

const getPromiseDataObject = async(): Promise<IObjectInterface> => {
    const data = await makePromiseObject()
    return data
}


interface IApiInterfaceTypes {
    postId: number,
    id: number,
    name: string,
    email: string,
    body:  string
    }
const sameRealApiCall = async (): Promise<IApiInterfaceTypes> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    return await res.json()
}

const apiGetData = async(): Promise<void> => {
    const result = await sameRealApiCall()
    console.log(result);
}

apiGetData()