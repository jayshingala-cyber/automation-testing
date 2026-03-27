import{test} from '@playwright/test';
import { select } from '../pages/select';
test('SelectText',async({page})=>{
    const manage=new select(page);
    await manage.gotoselect();
    await manage.select();
})