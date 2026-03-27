import{test}from '@playwright/test';
test('Login Test',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("Jay Shingala");
      await page.locator('#password').fill("12345678");
      await page.getByText('Login').click();
    await page.waitForTimeout(3000);
});