import{test} from '@playwright/test';
import { slider } from '../pages/slider';
test('slid',async({page})=>{
    const manage=new slider(page);
    await manage.gotos();
    await manage.slid();
});