import {test,expect} from '@playwright/test';
test('Enable',async({page})=>{
    await page.goto('https://qavbox.github.io/demo/signup/?uname=&datafile=&sgender=select&experience=seven&language=manualtesting&language=apitesting&language=html&commit=Submit');
    const search = page.locator('#submit');
    await expect(search).toBeEnabled();
});