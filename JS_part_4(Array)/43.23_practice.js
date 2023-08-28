//Write a JavaScript program to get the last n elements of an array.[n can be any positive number].
let arr = [1,2,3,4,5,6,7,8,9,10];
let n = 3;
let solution = arr.slice(arr.length - n);
console.log(solution);