users =[1,2,3]
function student_details(id)
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`Student ${id} is loaded`);
        }, 1000);
    });

}
function student_marks(id)
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`Mark of student ${id} is loaded`);
        }, 2000);
    });
}
function students_grade(id)
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`Grade of student ${id} is loaded`);
        }, 3000);
    });

}
async function student() {
    for (let id of users)
    {
        try
        {
            let r1 = await student_details(id);
            console.log(r1);
            let r2 = await student_marks(id);
            console.log(r2);
            let r3 = await students_grade(id);
            console.log(r3);
        }
        catch(error)
        {
            console.log(error);
            
        }
    }
}
student();