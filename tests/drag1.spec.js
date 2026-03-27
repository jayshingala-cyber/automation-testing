import{test} from'@playwright/test';
import { dragdrop } from '../pages/dragdrop';
test('DragDrop',async({page})=>{
    const manage=new dragdrop(page);
    await manage.gotodrag();
    await manage.drag();
});