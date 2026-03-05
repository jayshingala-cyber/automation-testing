const readline = require("readline");
const r1= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let c_b=10000;
let attempt=0;
function deposit(){
r1.question("Enter the Amount you want to deposit:",function(amount){
    amount = Number(amount);
    if(amount<=0)
    {
        console.log("Invalid number");
    }
    else
    {
    c_b+=amount;
     console.log(amount+" is successfullty deposit");
     console.log("Available Balance:"+c_b);
    }
     menu();
});
}
function withdraw(){
    r1.question("Enter the amount you want to Withdraw:",function(amount){
    amount = Number(amount);
    if(amount<=0)
    {
        console.log("Invalid number");
    }
    else
    {
        if(amount>c_b)
        {
            console.log("Insufficent Balance");
        } 
        else
        {
        c_b-=amount
        console.log(amount+" is Successfully Withdraw");
        console.log("Available Balance:"+c_b);
        }
   
    }
    menu();
});
}
function menu()
{
console.log("1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");
r1.question("Enter the Choice:",function(ch){
if(ch==1){
    console.log("Available Balance:"+c_b);
    menu();
}
else if (ch==2){
     deposit(); 
}
else if (ch==3){
     withdraw();
}
else if(ch==4)
{
    r1.close();
}
else{
     console.log("Invalid choice");
     menu();
}
});
}
function pinverify()
{
r1.question("Enter the Pin:",function(p){
if(p==1234)
{
    console.log("Pin Verification Successfull");
    menu();
}
else
{
    attempt++;
    console.log("Pin is not correct");
    if(attempt<=2)
    {
        pinverify();
    }
    else
    {
       console.log("Due to attempted many times\nplease try again after some time");
       r1.close(); 
    }
}
});
}
console.log("Welcome to the ATM\nFor Menu You need to enter Pin first");
pinverify();