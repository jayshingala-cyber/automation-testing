import {test} from '@playwright/test';
import { datetime } from '../pages/datetime';
test('Calender',async({page})=>{
    const manage=new datetime(page);
    await manage.gotodate();
    await manage.cal();
});