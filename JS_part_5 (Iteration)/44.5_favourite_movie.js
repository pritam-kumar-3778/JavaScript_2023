const fav_movie = "Avatar";
let guess = prompt("Guess my favourite movie :)");

while((guess != fav_movie) && ((guess != "quit") || (guess != "Quit"))){
    guess = prompt("Wrong guess! please try again...");
}

if(guess == fav_movie){
    console.log("congrats!");
} else {
    console.log("you quit");
}