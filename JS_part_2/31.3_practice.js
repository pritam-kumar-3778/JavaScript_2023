//A string is a golden string if its tart swith the character ‘A’ or ‘a’ and has a total length greaterthan 5.
//For a given string print if it is golden or not

let str = "Apples";

if((str[0] == 'a' || str[0] == 'A') && (str.length > 5)){
    console.log("Golden String");
} else {
    console.log("Not a golden String");
}