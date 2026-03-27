import {test} from '@playwright/test';
import { multiple1 } from '../pages/multiple1';
test('Multiple Tab',async({page,context})=>{
    const manage=new multiple1(page,context);
    await manage.gototab();
    await manage.multab();
    await manage.mulwin();
})