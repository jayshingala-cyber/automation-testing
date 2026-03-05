const readline = require("readline");
const r1 = readline.createInterface({
   input:process.stdin,
   output:process.stdout 
});
let arr=[];
let i=0;
function tot(arr)
{
    let sum=0;
    for(let value of arr)
    {
        sum+=value;
    }
    return sum;
}
function percentage(t)
{
    return (t/500)*100;
}
function forin(arr)
{
    for(let index in arr)
    {
        console.log(`Marks[${index}]:${arr[index]}`);
    }
}
function grade(percentage)
{
    if(percentage<40)
    {
        console.log("Fail");
    }
    else if(percentage>=40 && percentage<60)
    {
        console.log("Grade is C");
    }
     else if(percentage>=60 && percentage<80)
    {
        console.log("Grade is B");
    }
    else if(percentage>=80)
    {
        console.log("Grade is A");
    }
}
function ar(n,a){
    console.log("Name:"+n)
    a.forEach(function(mark){
        console.log("Marks:"+mark);
    });
}
r1.question("Enter Name of Student:",function(name){
function circle()
{
    if(i<5)
    {
        r1.question(`Enter the marks[${i+1}]:`,function(marks){
        arr[i]=Number(marks);
        i++;
        circle();
        });
    }
    else
    {
        let total,pr;
        ar(name,arr);
        total=tot(arr);
        console.log("Total:"+total);
        pr=percentage(total);
        console.log("Percentage:",pr);
        forin(arr);
        grade(pr);
        r1.close();
    }
}
circle();
});