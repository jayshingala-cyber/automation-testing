users =[1,2,3];
function getuser(id)
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`User ${id} loaded successfully`)
        }, 1000);
    });
}
function getorder(id)
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`Order ${id} loaded successfully`)
        }, 2000);
    });

}
function getproducts(id)
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`Product ${id} loaded successfully`)
        }, 3000);
    });

}
async function user(id){
    try
    {
    let get_u = await getuser(id);
    console.log(get_u);
    let get_o = await getorder(id);
    console.log(get_o);
    let get_p = await getproducts(id);
    console.log(get_p);
    }
    catch(error)
    {
        console.log(error);
        
    }
}
async function main() {
    for(let id of users)
    {
        await user(id);
    }
}
main();