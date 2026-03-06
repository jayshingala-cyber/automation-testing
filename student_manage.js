const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
students=[
    {id:1,name:"Jay",marks:20},
    {id:2,name:"Savan",marks:70},
    {id:3,name:"Yash",marks:67}
]
function remove(stu){
    r1.question("Enter the Student ID for remove:",function(id){
        id = Number(id);
        const result= stu.findIndex(item=> item.id==id);
        if(result !=-1)
        {
            stu.splice(result,1);
            console.log("Student is successfully removed");
        }
        else
        {
             console.log("Student not found");
        }
        menu();
    })
}
function find(stu)
{
    r1.question("Enter the student ID to find:",function(id){
        id = Number(id);
        const result=stu.find(student=>{
            return student.id==id
        });
        if(result)
        {
        console.log("Student Successfully Found");
        r1.question("Please Enter Yes to see student details:",function(que){
            console.log(que=="Yes"?result:"Thank you"); 
            menu();
        });
        }
        else
        {
        console.log("Student not Found");
        menu();
        }
    });
}
function add(stu)
{
    r1.question("Enter the Student ID:",function(id){
        r1.question("Enter the Student Name:",function(name){
            r1.question("Enter the Students Marks:",function(mark){
                id = Number(id);
                mark = Number(mark);
                stu.push({id:id,name:name,marks:mark});
                console.log("Student Added Successfully\n");
                view_students(stu);
                menu();
            });
        });
    });
}
function avg(stud)
{
    let total=0;
    for(let value of stud)
    {
        total+=value.marks;
    }
    return total/stud.length;
}
function pass(stud){
    console.log("Pass Students:");
    
   for(let item of stud)
   {
    if(item.marks>40)
    {
        console.log(item);
    }
   }
   menu();
}
function view_students(stu)
{
    stu.forEach(item => {
    console.log(`ID:${item.id},Name:${item.name},Marks:${item.marks}`);      
    });
}
function menu()
{
    console.log("\nShow Menu\n1 View Students\n2 Add Student\n3 Remove Student\n4 Find Student\n5 Show Passed Students\n6 Show Average Marks\n7 Exit");
    r1.question("Enter the Choice:",function(ch){
        ch = Number(ch);
        switch(ch)
        {
            case 1: view_students(students);menu();break;
            case 2: add(students);break;
            case 3: remove(students);break;
            case 4: find(students);break;
            case 5: pass(students);break;
            case 6: console.log("Avg:"+avg(students));menu();break;
            case 7: console.log("Project Successflly closed");process.exit(0);
            default:console.log("Invalid Choice");menu();
            
        }
    });
}
menu();