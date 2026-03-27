import{test} from '@playwright/test';
import { scroll } from '../pages/scroll';
test('Scroll',async({page})=>{
    const manage = new scroll(page);
    await manage.gotos();
    await manage.scroll();
    await manage.scroll1();
})