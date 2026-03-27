import {test} from '@playwright/test';
test.beforeEach(async({page})=>{
    console.log("Beforeeach");
})
test('first',async({page})=>{
    await console.log("First Test");
});
test('second',async({page})=>{
    await console.log("Second Test");
});