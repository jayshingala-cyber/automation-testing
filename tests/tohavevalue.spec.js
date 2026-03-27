import {test,expect} from '@playwright/test';
test('Value',async({page})=>{
    await page.goto("https://qavbox.github.io/demo/signup/?uname=&datafile=&sgender=select&experience=seven&language=manualtesting&language=apitesting&language=html&commit=Submit");
    const search = page.locator('input[name="uname"]');
    search.fill('Hello Jay');
    await expect(search).toHaveValue('Hello Jay');
});