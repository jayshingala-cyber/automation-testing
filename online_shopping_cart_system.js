const readline= require("readline");
const r1 = readline.createInterface({
   input:process.stdin,
   output:process.stdout 
});
product=[
    {id:1,name:"Laptop",price:50000},
    {id:2,name:"Mobile",price:9400},
    {id:3,name:"HeadPhones",price:2000}
]
cart=[];
function add(product){
    view(product);
    console.log("\nYou can select Products from this List\nPlease Add products on Cart");
    r1.question("Enter the Product Id:",function(id){
        id = Number(id);
        if(id>0 && id<=product.length)
        {
        cart.push(product[id-1]); 
        console.log("Product Added to Cart");
        }
        else
        console.log("Invalid Product ID");
    menu();
    });    
}
function remove(cart){
    r1.question("Enter the product id which you want to remove:",function(id){
        id = Number(id);
        cart.splice(id-1,1);
        console.log(cart);
        menu();
    });
    
}
function view(product)
{
    product.forEach(function(pro){
        console.log(`ID:${pro.id},Name:${pro.name},Price:${pro.price}`);
    });
}
function viewcart(cart)
{
    cart.forEach(function(item){
        console.log(`ID:${item.id},Name:${item.name},Price:${item.price}`);
    })
  
}
function checkout(cart)
{
    let total=0;
    total = Number(total);
    for(let i of cart)
    {
        total+=i.price;
    }
    console.log("You Order is Placed\nList Of the Order:");viewcart(cart);
    console.log("Total Bill:"+total);   
    menu();
}
// function exit()
// {
//     r1.close();
// }
function menu()
{
console.log("Show MENU\n1 View Products\n2 Add Product\n3 Remove Product\n4 View Cart\n5 Checkout\n6 Exit");
r1.question("Enter your choice:",function(ch){
    ch = Number(ch);
    switch(ch)
    {
        case 1:view(product);menu();break;
        case 2:add(product);break;
        case 3:remove(cart);break;
        case 4:viewcart(cart);menu();break;
        case 5:checkout(cart);break;
        case 6:process.exit(0);
    }
});
}
menu();