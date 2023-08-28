let colors = ["red" , "green" , "blue" , "yellow"];
console.log(colors.splice(2));
console.log(colors.splice(0,2));
colors.splice(0,1,"black","grey");
colors.push("aqua" , "hotpink");
console.log(colors);

let colors1 = ["red" , "green" , "blue" , "yellow", "Hotpink"];
console.log(colors1.splice(0,2,"aqua" , "violet"));
console.log(colors1);
