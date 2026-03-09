function time()
{
return new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("Tash Completed");
  },3000);
 });
}
// time().then(result =>{
//     console.log(result);
    
// })
async function set() {
    console.log("Start");
    let r = await time();
    console.log(r);
    console.log("End");
}
set();
