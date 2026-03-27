import {test,expect} from '@playwright/test';
test.describe('Homepage',()=>{
    test.beforeAll('BeforeALL',async({})=>{
        await console.log("Program Has started");
    });
    test.afterAll('AfterAll',async({})=>{
        await console.log("Program Had Finished");
    });
    test.afterEach('AfterEach',async({})=>{
        await console.log("Next Test start to run");
        
    });
    test.beforeEach('BeforeEach',async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    });
    test('alert',async({page})=>{
        page.once('dialog',async dialog=>{
            console.log(dialog.message());
            dialog.accept();
        });
        await page.getByText('Click for JS Alert').click();
        await expect(page.locator('#result')).toContainText('You successfully clicked an alert');
    });
    test('Confirm',async({page})=>{
        page.once('dialog',async dialog=>{
            console.log(dialog.message());
            dialog.dismiss();
        });
         await page.getByText("Click for JS Confirm").click();
         await expect(page.locator('#result')).toContainText("You clicked: Cancel");
    });
});