const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.question("Enter the Username:",function(username){
    r1.question("Enter the Password:",function(password){
        if(username==="Jay" && password==="1234")
        {
            console.log("Login Successfull");
            r1.question("Enter the Role:",function(role){
             switch(role)
             {
                case "admin": console.log("Full Access");break;
                case "editor": console.log("Edit access");break;
                case "viewer": console.log("Read Only");break;
                default:console.log("Invalid Role");break;
             }   
             r1.close();
            })
            
        }
        else
        {
            console.log("Username or Password Incorrect");
            r1.close();
        }
    })
})