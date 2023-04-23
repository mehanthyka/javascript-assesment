
 

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if(shoppingCart=="Meat")
    {
        console.log(shoppingCart);
    }
    else
    {
        shoppingCart.unshift("Meat");
        console.log(shoppingCart);   
    }
if(shoppingCart=="Sugar")
    {
        console.log(shoppingCart);
    }
     
    else
    {
        shoppingCart.push("Sugar");
        console.log(shoppingCart);   
    }
for(var i=0;i<shoppingCart.length;i++)
{
    if(shoppingCart[i]=="Honey")
    {
        shoppingCart.splice(i,1);
    }
}
console.log(shoppingCart);
var change=3;
var name="Green Tea";
var result=shoppingCart.splice(change,1,name);
console.log(shoppingCart);