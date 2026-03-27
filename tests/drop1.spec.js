import{test} from '@playwright/test';
import { dropdown1 } from '../pages/dropdown1';
test('DropDown',async({page})=>{
const manage = new dropdown1(page);
await manage.gotod();
await manage.drop();
});