//create a function to roll a dice & always display the value of dice(1 to 6).
function dice(){
let dice_roll = Math.floor(Math.random()*6)+1;
console.group(dice_roll);
}
//call the function to display dice number
dice();