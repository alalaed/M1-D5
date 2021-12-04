// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/




const giveMeRandom = function(n){
    let array = []

    for (i=0; i<n; i++){

        let x = Math.random()
        let y = x*10
        let z = Math.floor(y)
        array.push(z)
    }
    return array

}
const checkArray = function(n){
    

    let sum = giveMeRandom(n)
    console.log(sum)
    let j = 0
    for (i=0; i<sum.length; i++){
            if(sum[i]>5){
                 j+= sum[i]}   
               else
                   continue                       
            }
            console.log (j)  
}

   
  checkArray(8)      
           


/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

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
item2.id = " 13 Pro Max "
item2.price = 1700
item2.qty = 1


const addToShoppingCart = function(){
        
        
        shoppingCart.push(item4)
        console.log(shoppingCart)
}

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

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

const latestShoppingCart = function(){
    let n = shoppingCart.length
    return shoppingCart[n-1]
}
console.log(latestShoppingCart())

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

let median = [1,2,3,4,5,6,"butter","milk", 7,8, "apple", 9,10]


const average = function(){

        let array = []
        for(i=0; i<median.length; i++){

                if ( typeof median[i] === "number"){

                array.push(median[i])
        }
                else {continue}
        }
        let result = 0
        for(i=0; i<array.length; i++) {
        result += array[i]}
        let avg = result / array.length
        console.log(avg)
}

average()

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/