import{test}from '@playwright/test';
import { drag } from '../pages/drag';
test('Drag',async({page})=>{
    const manage=new drag(page);
    await manage.gotos();
    await manage.sort();
});