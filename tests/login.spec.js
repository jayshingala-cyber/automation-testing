import {test,expect} from '@playwright/test';
test('Login page',async({page})=>{
    await page.goto('https://qavbox.github.io/demo/signup/?uname=&datafile=&sgender=select&commit=Submit');
    await page.locator('#username').focus();
    await page.locator('#username').fill("Jay");
    await page.waitForTimeout(3000);
    await page.locator('[name="sgender"]').selectOption('male');
    //await page.getByRole('combobox',{name:'Gender:'}).selectOption('male');
    await page.locator('[value="manualtesting"]').check();
    await page.locator('#submit').hover();
    await page.locator('[value="manualtesting"]').uncheck();
    await page.locator('[value="one"]').check();
    await page.waitForTimeout(3000);
});