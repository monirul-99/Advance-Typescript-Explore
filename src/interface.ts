// it use for primitive type of data
type User = {
    name : string;
    age : number
}


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
