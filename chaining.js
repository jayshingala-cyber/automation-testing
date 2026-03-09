Promise.resolve(20)
.then(num =>{
    return num*2;
})
.then(num =>{
    throw("Something is Wrong");
})
.then(num =>{
    console.log(num);
})
.catch(error=>
{
    console.log(error);
    return 40 ;
})
.then(num =>{
    console.log(num);
});