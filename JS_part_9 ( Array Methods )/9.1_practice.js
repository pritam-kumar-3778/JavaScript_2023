let studentInfo = [
    {
        name:"Pritam",
        mark:95,
    },
    {
        name:"Rahul",
        mark:94,
    },
    {
        name:"Srinibash",
        mark:94,
    }
];

let gpa = studentInfo.map((each_gpa)=>{
    console.log(each_gpa.mark/10);
})