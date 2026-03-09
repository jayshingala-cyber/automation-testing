function getuser()
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("User Loaded");
        }, 1000);
    });
}
function getorders()
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Order loaded");
        }, 2000);
    });
}
function getproducts()
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Products Loaded");
        }, 3000);
    });
}
async function user() {
    try{
    let result = await Promise.all([getuser(),getorders(),getproducts()]);
        console.log(result[0]);
        console.log(result[1]);
        console.log(result[2]);
    }
    catch(error)
    {
        console.log(error); 
    }
}
user();