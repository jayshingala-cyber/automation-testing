import {test,expect} from '@playwright/test';
import { cart } from '../pages/cart';
import { users } from '../test_data/logindata';
for(let user of users)
{
test(`Login for user:${user.username}`,async({page})=>{
    const addcart=new cart(page);
    await addcart.gotoecom();
    await addcart.webcart(user.username,user.password);
    await page.waitForTimeout(3000);
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
}