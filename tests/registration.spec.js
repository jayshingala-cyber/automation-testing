import {expect, test} from '@playwright/test';
import { registration } from '../pages/registration';
test('Registration Form',async({page})=>{
    const reg=new registration(page);
    await reg.gotoreg();
    await reg.reg('Jay Shingala','jay@gmail.com','male');
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://qavbox.github.io/demo/signup/');
    await expect(page.locator('#username')).toHaveValue('Jay Shingala')
});