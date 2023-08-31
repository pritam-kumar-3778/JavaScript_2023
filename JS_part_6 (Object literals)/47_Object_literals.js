const student = {
    name : "Pritam Kumar Patel",
    age : 21,
    branch : "MCA",
    current_CGPA : 9.25
};

console.log(student);


//get value
const item = {
    name : "T-shirt",
    price : 149,
    color : "red"
};
console.log(item.price);
//or
console.log(item["color"]);


//add/update values
const student2 = {
    name : "Pritam Kumar Patel",
    age : 21,
    city : "Jharsuguda",
    recentMarks : 9.25
};
//change the city to "Bangalore"
    student2.city = "bengalore";
//add a new proporty gender : "Male"
    student2.gender = "male";
//change the recentMarks to "O grade"
    student2.recentMarks = "O grade";
//delete age
    delete student2.age;

    console.log(student2);