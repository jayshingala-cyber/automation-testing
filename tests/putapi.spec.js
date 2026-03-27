import{test,expect} from '@playwright/test';
test('PUTAPI',async({request})=>{
    const authdata={
        "username" : "admin",
        "password" : "password123"
    }
    const response = await request.post('https://restful-booker.herokuapp.com/auth',{
        headers:{"Content-Type":"application/json"},data:authdata});
        const rdata= await response.json();
        const token = rdata.token;
        console.log('Token is:'+token);
        expect(response.status()).toBe(200);
    
    const getresponse = await request.get('https://restful-booker.herokuapp.com/booking');
    const getdata= await getresponse.json();
    console.log(getdata);
    expect(getresponse.status()).toBe(200);
    
    const newdata={
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
    const postresponse= await request.post('https://restful-booker.herokuapp.com/booking',{
        headers:{"Content-Type":"application/json"},data:newdata});
    const postdata= await postresponse.json();
    const bookingID= postdata.bookingid;
    console.log('BookingID:'+bookingID);
    expect(postresponse.status()).toBe(200);

    const update={
        "firstname" : "Jayu",
        "lastname" : "Shingala",
        "totalprice" : 333,
        "depositpaid" : false,
        "bookingdates" : {
        "checkin" : "2026-05-01",
        "checkout" : "2026-05-04"
    },
    "additionalneeds" : "Breakfast"
    }
    const putresponse= await request.put(`https://restful-booker.herokuapp.com/booking/${bookingID}`,{
        headers:{"Content-Type":"application/json","Accept":"application/json","Cookie":"token="+token},data:update});
    const putdata= await putresponse.json();
    console.log(putdata);
    expect(putresponse.status()).toBe(200);   
});