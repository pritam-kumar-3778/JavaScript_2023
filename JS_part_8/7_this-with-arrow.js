const student = {
    name:"Pritam",
    mark : 95,
    prop : this,
    getmark(){
        setTimeout(()=>{
            console.log(this);
        },2000);
    }
}
student.getmark();
