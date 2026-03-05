const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function cal(y,s){
    let result = y>=5?s*0.20:s*0.10;
    return result;
}
let basic_salary =2000
let year_of_experience=2;
let total = basic_salary+cal(year_of_experience,basic_salary);
r1.question("Enter the name:",function(name){
    console.log("NAME: "+name);
    console.log("Total Salary="+total);
    console.log(total>=50000?"High":"Low");

});
