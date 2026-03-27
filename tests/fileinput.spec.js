import{test} from '@playwright/test';
import { file } from '../pages/file';
test('fileupload',async({page})=>{
    const manage=new file(page);
    await manage.gotofile();
    await manage.inputfile();
    await manage.download();
});