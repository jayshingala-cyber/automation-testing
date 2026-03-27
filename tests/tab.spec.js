import {test,expect} from '@playwright/test';
import { multiple } from '../pages/multiple';
test('Multiple Tabs',async({page,context})=>{
    const manage= new multiple(page,context);
    await manage.gototab();
    await manage.multabs();
    await manage.mulwin();
})