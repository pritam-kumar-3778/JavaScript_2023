{
let arr1 = [1,2,3];
arr1.sayhello = ()=>{
    console.log("hello! I am an array");
}

let arr2 = [1,2,3];
arr2.sayhello = ()=>{
    console.log("hello! I am an array");
}

// compare both the function of arr1 and arr2
let comparesion = arr1.sayhello === arr2.sayhello;
console.log(comparesion); //false
// arr1 take a memory on system and arr2 take anather memory space memory in the system thats why it returns false even the function name are same
}

{
let word1 = "apple";
let word2 = "mango";
let comparesion = word1.toUpperCase === word2.toUpperCase;
console.log(comparesion); //true
// toupperCase is the method of String prototype so both the string refer to the same memory location thats why it returns true
}