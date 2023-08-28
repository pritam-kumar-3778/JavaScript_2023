//For the given start state of an array, change it to final form using methods.
//starting state : ["january" , "July" , "March" , "August"]
let start = ["january" , "July" , "March" , "August"];
console.log("Start state ::" + start);
//remove january
start.shift();
//remove july
start.shift();

//add june
start.unshift("June");
//add july
start.unshift("July");

//print final state
console.log("Final state ::" + start);
