let number =12;
const result = new Promise((resolve,reject)=>{
    if(number>11)
    {
        resolve("Greater number");
    }
    else{
        reject("Smaller number");
    }
});
async function num() {
    try{
    let ans = await result;
    console.log(ans);
    }
    catch(error)
    {
        console.log(error);
    }
}
num();