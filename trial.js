
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





/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

let item4 = {}
Object.assign(item4,item1)
item4.id = " 13 Pro Max "
item4.price = 1700
item4.qty = 1


const addToShoppingCart = function(){
        
        
        shoppingCart.push(item4)
        console.log(shoppingCart)
}
addToShoppingCart()
       



/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

const maxShoppingCart = function(){
        
        let mostExpensive = 0
        for(i=0; i<shoppingCart.length; i++){
                if(shoppingCart[i].price > mostExpensive)
                
                { mostExpensive = shoppingCart[i].price }
        }
               
                return mostExpensive;
        
}
console.log(maxShoppingCart())




/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

const latestShoppingCart = function(){
        let n = shoppingCart.length
        return shoppingCart[n-1]
}
console.log(latestShoppingCart())


   
    