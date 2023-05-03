// a type is dependent on another type
type a1 = string;
type a2 = a1 extends string ? string : null

//nested conditional type
type a3 = undefined;
type a4 = number;
type d = a1 extends null ? null : a3 extends number? number : a4 extends null ? null : never


type RichMan = {
    wifeOne : string,
    wifeTwo : string
}

//More Time Spent To Understands
type CheckProperty<T, K> = K extends keyof RichMan ? true : false
type CheckWifeOne = CheckProperty<RichMan, "wifeTwo">


//More Interesting Features Conditional Type
type friends = "Monirul" | "Islam" | "Sadia"
type RemoveFriends<T, R> = T extends R ? never : T

type CurrentFriends = RemoveFriends<friends, "Islam">