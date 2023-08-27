let userName = prompt("Enter your name");
let password = prompt("Enter your Password");
let correctPassword = "123abc";
let invalidMsg = "Wrong Password";
console.log(userName);
if(password != correctPassword){
    console.log(invalidMsg.toUpperCase());
}
if(password == correctPassword){
    console.log("Successfully login");
}

