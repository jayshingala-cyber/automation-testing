const { rejects } = require("assert");
const { error } = require("console");
const { resolve } = require("dns");
const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function vote(age_n)
{
    const result = new Promise((resolve,reject)=>{
        if(age_n>=18)
        {
            resolve("You are Eligible to Vote");
        }
        else
        {
            reject("You are not Eligible to Vote");
        }
    });
    result.then(r =>{
        console.log(r);
    })
    .catch(e=>{
        console.log(e);
           
    });
     r1.close();
}

// async function age(number) {
//     try{
//     let ans = await vote(number);
//         console.log(ans);
//     }    
//     catch(error)
//     {
//         console.log(error);
        
//     }
//     r1.close();
// }
r1.question("Enter the age=",function(n){
    n = Number(n);
    vote(n)
})