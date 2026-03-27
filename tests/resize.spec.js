import {test} from '@playwright/test';
import { resizeable } from '../pages/resizeable';
test('Resize',async({page})=>{
    const manage = new resizeable(page);
    await manage.gotor();
    await manage.resize();
})