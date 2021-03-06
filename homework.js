/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

const area = function(l1,l2){
    result = l1*l2
    console.log(result)
}

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(s1,s2){
    if(s1!==s2){
        sum = s1 +s2
        
    } else{
        sum = (s1+s2) * 3
    }
    console.log(sum)
}
crazySum(2,4)

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(n){
    if ( n <19){
        let x = (n-19)*-1
    }else {
        x = (n-19)*3
    }
    console.log(x)
}

crazyDiff (34)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary = function(n){
    if( (20 <= n ) && ( n<= 100) || ( n===400) ){
        return true
    } else {
        return "error" 
    }
}

console.log(boundary(155))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/


const strivify = function(s){

    let indexOf = s.indexOf("Strive")
    let addedString = "Strive"
    if ( indexOf === 0 ) {
        console.log(s)
    } else {
        console.log(addedString + " " + s)
    }
}

strivify("Strive ,ali is tired")

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

const check3and7 = function (n){
    if( n%3===0  || n%7===0){
        return " Passes"
    } else {
        return "denied"
    }
}

console.log(check3and7(45))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

const reversString = function(s){

    let split = s.split("")
    let reversedArray = split.reverse()
    let result = reversedArray.join("")
    console.log(result)
}

reversString("ali is tired")


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(s){

    let split = s.split(" ")
    for( i=0; i<split.length; i++ ){

        split[i]=split[i].charAt(0).toUpperCase( )+ split[i].slice(1)   
    }
    let capital=split.join(" ")

    console.log(capital)
}

upperFirst("ali is tired")

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const cutString = function(s){
    let split = s.split("")
    let remove = split.pop()
    let removed = split.splice(0,1)
    console.log(split)
}

cutString("ali is Tired")

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/



const giveMeRandom = function(n){
    let array = []

    for (i=0; i<=n; i++){

        let x = Math.random()
        let y = x*10
        let z = Math.floor(y)
        array.push(z)
    }
   return array 
}
console.log(giveMeRandom(6))


/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/