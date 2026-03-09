function one()
{
    return Promise.resolve("Task One Completed");
}
function two()
{
    return Promise.resolve("Task Two Completed")
}
async function run() {
    let ans = await one();
    console.log(ans);
    let ans1 = await two();
    console.log(ans1);
}
run();