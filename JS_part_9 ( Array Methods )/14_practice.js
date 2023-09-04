//Check all number in an array are multiples of 10 or not
let arr = [10,20,30,40,50];
let newarr = arr.every((el)=>{
    console.log(el % 10 == 0);
})