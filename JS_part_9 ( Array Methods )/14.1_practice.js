//create a function to find the minimum number in an array
let arr = [1,2,3,4,5,6,7,8,9];
let min = arr.reduce((min,el)=>{
    if(min > el){
        return el;
    } else {
        return min;
    }
});
console.log(min);