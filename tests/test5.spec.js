import {test} from '@playwright/test';
test('GetBYROLE',async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByRole('button',{name:'Login'}).click();
});