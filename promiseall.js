let p1 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Execute after 2 seconds");
    }, 2000);
});
let p2 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Execute after 7 seconds");
    }, 5000);
});
Promise.race([p1,p2])
.then((result)=>{
    console.log(result); 
});