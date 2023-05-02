// let text: any;
// text = "Next level";
// (text). Not Suggest

let text: any;
text = "Next level";
(text as string).length; //Suggest available
<string> text.length; //Suggest available // second way




type CustomErrorType = {
    message: string
}

try{
    function kgToGram(input: string | number) : string | number | undefined{
        if(typeof input === "string"){
            const converted = parseFloat(input) * 1000
            return `The Converted Result is: ${converted}`
        }
        if(typeof input === "number"){
            const converted = input * 1000
            return `The Converted Result is: ${converted}`
        }
    }

const resultToBeNumber = <number> kgToGram(234)
const resultToBeString = <string> kgToGram("3456")
console.log(`${resultToBeNumber} \n${resultToBeString}`);

} catch(err){
    console.log((err as CustomErrorType).message);
}
