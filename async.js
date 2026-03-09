let name = "Jay";
const result = new Promise((resolve,reject)=>{
    if(name ==="Jay")
    {
        resolve("Completed");
    }
    else{
        reject("Incompleted");
    }
});
result.then(function(r){
    console.log(r);
})
.catch(function(r){
    console.log(r);
    
});

let number = 10;
// const ans = new Promise((resolve,reject)=>{
//     if(number>18){
//         resolve("Greater");
//     }
//     else
//     {
//         reject("Smaller");
//     }
// });
async function run() {
    try{
        let ans;
        if(number>5)
        {
            ans = Promise.resolve("Greater");
        }
        else
        {
            ans = Promise.reject("Smaller");
        }
    let result = await ans;
    console.log(result);
    }
    catch(error){
        console.log(error);
        
    }
}
run();