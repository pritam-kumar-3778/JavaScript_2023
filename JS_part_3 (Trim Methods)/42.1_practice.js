let str = "Satya Prem ki Katha";
let str1 = "Satya";
let str2 = "Prem ki Katha";
console.log(str.slice(6,10));
console.log(str.indexOf("Prem"));
let a = str1.replace("Satya" , "Ankita");
let b = str2.replace("Prem" , "Pritam");
let finalName = `${a} ${b}`;
console.log(finalName);