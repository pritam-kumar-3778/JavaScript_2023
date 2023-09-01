const studentInfo = {
    name : "Pritam Kumar patel",
    age : 21,
    java : 98,
    DSA : 99,
    getAvg(){
        let avg = (this.java + this.DSA)/2;
        console.log(avg);
    }
};
console.log(studentInfo.getAvg());