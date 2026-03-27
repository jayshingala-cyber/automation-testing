import {test,expect} from '@playwright/test';
test('TEXT',async({page})=>{
    await page.goto('https://qavbox.github.io/demo/signup/?uname=&datafile=&sgender=select&experience=seven&language=manualtesting&language=apitesting&language=html&commit=Submit');
    const search = page.locator('h3');
    try{
    await expect(search).toHaveText('Work on these below dummy controls to learn automation testing');
    await page.waitForTimeout(3000);
        console.log("Text is Successfully fetch");
    }
    catch(error)
    {
        console.log("Text is wrong");
    }
        
});