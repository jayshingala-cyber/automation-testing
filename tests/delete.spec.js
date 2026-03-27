import{test,expect} from '@playwright/test';
test('Delete Api',async({request})=>{
    const res = await request.post('https://restful-booker.herokuapp.com/auth',{
        headers:{"Content-Type":"application/json"},data:{
        "username" : "admin",
        "password" : "password123"
        }
    });
    const r_data = await res.json();
    const token = r_data.token;
    console.log(token);
   const response = await request.post('https://restful-booker.herokuapp.com/booking',{
        data:{
        "firstname" : "Jay",
        "lastname" : "Shingala",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
        "checkin" : "2026-01-01",
        "checkout" : "2026-01-01"
    },
    "additionalneeds" : "Breakfast"
        }
    });
     const res_data = await response.json();
     const id = res_data.bookingid;
     console.log(id);
     expect(response.status()).toBe(200);

     const response_1 = await request.delete(`https://restful-booker.herokuapp.com/booking/${id}`,{
        headers:{"Content-Type":"application/json","Accept":"application/json","Cookie":"token="+token},
     });
     expect(response_1.status()).toBe(201);
    
 });