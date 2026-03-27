import {test,expect} from '@playwright/test';
test('Contain',async({page})=>{
    await page.goto("https://qavbox.github.io/demo/signup/?uname=&datafile=&sgender=select&experience=seven&language=manualtesting&language=apitesting&language=html&commit=Submit");
    const search = await page.locator('h3');
    await expect(search).toContainText('Work');
});