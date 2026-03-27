import {test} from '@playwright/test';
import { iframe } from '../pages/iframe';
test('Iframe',async({page})=>{
    const manage=new iframe(page);
    await manage.gotoiframe();
    await manage.iframes();
});