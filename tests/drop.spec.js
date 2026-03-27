import{test}from'@playwright/test';
import { dropdown } from '../pages/dropdown';
test('dropdown',async({page})=>{
    const manage= new dropdown(page);
    await manage.gotod();
    await manage.drop();
});