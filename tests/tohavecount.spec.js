import {test,expect} from '@playwright/test';
test('Count',async({page})=>{
    await page.goto('https://qavbox.github.io/demo/signup/?uname=&datafile=&sgender=select&experience=seven&language=manualtesting&language=apitesting&language=html&commit=Submit');
    const search = page.locator('a');
    await expect(search).toHaveCount(4);
});