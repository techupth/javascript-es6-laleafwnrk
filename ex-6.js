let height = undefined;
let result = (height??undefined);
if (result === undefined){
    result = "Height is not defined"
}

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
