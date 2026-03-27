import {test} from '@playwright/test';
test('Xpath',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('//input[@id="user-name"]').fill("Jay Shingala");
    await page.waitForTimeout(3000);
})