let arr = [1,2,4,5,7,8,9];
let max = arr.reduce((max,el)=>{
    if(max < el){
        return el;
    } else {
        return max;
    }
});
console.log(max);