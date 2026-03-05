const readline = require("readline");
const r1 = readline.createInterface({
input:process.stdin,
output:process.stdout
});
function traffic(s,type,l){
    if(l==="No")
    {
        console.log("Fine Will be Charged 100Rs for not Having License");
    }
    if(s>80)
    {
        switch(type)
        {
            case "Car":l=="No"?console.log("Fine will be 500 for Overspeeding\nTotal = 600"):console.log("Fine will be 500");break;
            case "Bike":l=="No"?console.log("Fine will be 250 for Overspeeding\nTotal = 350"):console.log("Fine will be 250");break;
            case "Truck":l=="No"?console.log("Fine will be 1000 for Overspeeding\nTotal = 1100"):console.log("Fine will be 1000");break;
            default: console.log("Please Enter Correct Vechicle Type");
        }
        r1.close();
    }
    else
        if(l==="Yes")
        {
        console.log("Your speed is okay you can leave");
        }
        r1.close();
    }
r1.question("Enter the Speed:",function(speed){
  r1.question("Enter Vechicle Type:",function(type){
    r1.question("Enter the License Status:",function(Lic){
        speed = Number(speed);
        traffic(speed,type,Lic);
    });
  });
});