/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.*/

 let shoppingCart = []
 let item1 = {
         name: "Iphone",
         id:" 13 ",
         price: 1000,
         qty: 1 ,
 }

let item2 = { }
Object.assign(item2, item1) 
        item2.id = " 12 "
        item2.price = 900
        item2.qty = 1

let item3 = { }
Object.assign(item3,item1)
        item3.id = " 13Pro "
        item3.price = 1300
        item3.qty = 1        


        shoppingCart.push(item1,item2,item3)
        console.log(shoppingCart)
      
let sum = 0
const shoppingCartTotal = function(){
        for(i=0; i<shoppingCart.length; i++){
                sum += shoppingCart[i].price
        }
        console.log(sum)
        
}        

console.log(shoppingCartTotal())



       

    
   
    