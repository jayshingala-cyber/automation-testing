import {test,expect} from'@playwright/test';
test('Simplealert',async({page})=>{
    await page.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert');
    const frame = page.frameLocator('#iframeResult');
    page.on('dialog',async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await frame.getByRole('button',{name:"Try it"}).click();
    await page.waitForTimeout(3000);
    
   
});