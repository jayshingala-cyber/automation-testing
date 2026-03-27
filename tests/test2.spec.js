import {test,expect} from '@playwright/test';
test('Click Button using Text Loacator',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(3000);
    await page.getByText('Login').check();
});