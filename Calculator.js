const readline= require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let ch;
function op(n1,n2,ch){
    switch(ch)
    {
        case 1:add = console.log("Ans:",n1+n2);menu();break;
        case 2:sub = console.log("Ans:",n1-n2);menu();break;
        case 3:mul = console.log("Ans:",n1*n2);menu();break;
        case 4:
            if(n2===0)
            {
                console.log("Zero is not divisible");
            }
            else
            {
                console.log("Ans:",n1/n2)
            }
            menu();
            break;
        case 5:r1.close();
    }
}
function menu()
{
console.log("MENU\n1.ADD\n2.SUB\n3.MUL\n4.DIV\n5.Exit");
r1.question("Enter your Choice:",function(ch){
     ch = Number(ch);
    if(ch!=4 && ch!=3 && ch!=2 && ch!=1)
    {
        if(ch==5)
            {
                r1.close();
            }
        else
            {
                console.log("Invalid Choice");menu();
            }
    }
    else
    {
          r1.question("Enter the First Number:",function(n1){
          r1.question("Enter the Second Number:",function(n2){
          n1 = Number(n1);
          n2 = Number(n2);
          op(n1,n2,ch);
       });
     });
    }
 });
};
menu();