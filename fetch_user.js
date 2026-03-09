const users=[1,2,3,4];
function fetchuser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(id===3)
            {
                reject("Failed");
            }
            else
            { resolve(`User ${id} Data Loaded`);}
           
        }, 5000);
    });
}
// async function user() {
//     try{
//     const promises = users.map(id =>fetchuser(id));
//     const r1 = await Promise.allSettled(promises);
//     r1.forEach(item => {
//         if(item.status==="fulfilled")
//         {
//             console.log(item.value);
//         }
//         else
//         {
//             console.log(item.reason);
//         }
        
//     });
// }
async function user() {
    for(let id of users)
    {
        try
        {
            const promises = await fetchuser(id);
            console.log(promises);
        }
        catch(error)
        {
            console.log(error);
            
        }
    }
}
user();
