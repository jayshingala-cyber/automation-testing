let Student_name ="Jay";
let marks1=56;
let marks2=30;
let marks3=30;
let marks4=30;
function total(a,b,c,d){
    return a+b+c+d;
}
function avg(a){
    return a/4;
}
let t=total(marks1,marks2,marks3,marks4);
console.log("Total is:"+t);
console.log("Avg is:"+avg(t));
console.log(avg(t)>40?"Pass":"Fail");
let result = avg(t)>40?"Pass":"Fail";
console.log("NAME|TOTAL|AVG|RESULT(PASS/FAIL)");
console.log(Student_name+"|"+t+"|"+avg(t)+"|"+result);