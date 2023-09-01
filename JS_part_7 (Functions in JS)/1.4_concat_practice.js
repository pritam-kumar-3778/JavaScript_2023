//create a function that returns the concatenation of all strings in an array.
let str = ["hi"," ","hello"," ","namaste"];
function concatenation(str){
    let reasult="";
    for(let i=0;i<str.length;i++){
        reasult += str[i];
    }
    return reasult;
}
console.log(concatenation(str));