import{test,expect} from '@playwright/test';
test('API',async({request})=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    const responsedata= await response.json();
    console.log(responsedata);
    console.log(response.statusText());
    expect(response.status()).toBe(200);
});