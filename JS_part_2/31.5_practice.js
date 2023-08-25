//Write a program to check if 2 numbers have the same last digit.
//Eg: 32 and 47852 have the same last digit i.e. 2.
let num1 = 32;
let num2 = 302;

if(((num1 % 10)&&(num2 % 10)) == 2){
    console.log("Both number are devide by 10 and reminder is 2");
} else {
    console.log("Both number are devide by 10 and reminder is not 2");
}

