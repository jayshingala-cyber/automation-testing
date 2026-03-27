import {test,expect} from '@playwright/test';
test('alerts',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.once('dialog',async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.getByText("Click for JS Alert").click();
    page.once('dialog',async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.dismiss();
    });
    await page.getByText("Click for JS Confirm").click();
    await expect(page.locator('#result')).toContainText('Cancel');
    page.once('dialog',async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.accept("Hello Jay");
    });
    await page.getByText("Click for JS Prompt").click();
    await expect(page.locator('#result')).toContainText("Hello Jay");

    page.once('dialog',async dialog=>{
        const message = dialog.message();
        await expect(message).toContain("I am a JS Alert");
        console.log(message);
        console.log(dialog.type());
        dialog.accept();
    });
    await page.getByText("Click for JS Alert").click();
    page.on('dialog',async dialog=>{
        console.log("Alert:"+dialog.message());
        dialog.accept();
    });
    await page.getByText('Click for JS Alert').click();
    await page.getByText('Click for JS Confirm').click();
    
});