//Write a JavaScript program to check if an element exists in an array or not
let arr = ["Hello" , 2 , 4 , 5 , 9.25];
let item = "Hello";

if(arr.indexOf(item) != -1){
    console.log("Element exist in array");
} else {
    console.log("Element doesn't exist in array");
}