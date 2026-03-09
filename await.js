function delay() {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve("Task Completed");},5000);
    });
}
async function run() {
    console.log("Start");
    let result = await delay();
    console.log(result);
    console.log("End");

}
run();
