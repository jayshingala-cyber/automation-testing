import{test} from '@playwright/test';
import { draggable } from '../pages/draggable';
test('Draggable',async({page})=>{
const manage=new draggable(page);
await manage.gotodr();
await manage.drag();
await manage.drag1();
});