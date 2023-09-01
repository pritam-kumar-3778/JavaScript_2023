function multiplegreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet = function(){
    console.log("Pritam");
}
multiplegreet(greet,10);