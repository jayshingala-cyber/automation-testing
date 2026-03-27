import{test,expect} from '@playwright/test';
test('PostApi',async({request})=>{
    const authdata= {
        username:'admin',
        password:'password123'
    }
    const response=await request.post('https://restful-booker.herokuapp.com/auth',{
        headers:{"Content-Type":"application/json"},data:authdata});
        const rdata= await response.json();
        const token = rdata.token;
        console.log("Token is:"+token);
        
        expect(response.status()).toBe(200);
});