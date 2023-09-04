// let nums = [1,2,3,4,5,6,7,8,9,10];
// let ans = nums.filter((even)=>{
//     console.log(even % 2 == 0);
// });

let student = [
    {
        name : "Rahul",
        roll : 34
    },
    {
        name : "asdfg",
        roll : 344
    },
]
// let getroll = student.filter(()=>{
//     console.log(student.roll > 100);
// });
console.log(student.filter(roll=> roll.roll>10));