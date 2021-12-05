/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

let firstString = "this is the first string"
let secondString = "this is the second string"
let thirdString = "this is the third string "
let finalString = "this is and will be the final string"
let arrayOfStrings = [firstString,secondString,thirdString,finalString]

const longest = function(){
        let theLongestString = arrayOfStrings[0]
        for ( i = 0; i< (arrayOfStrings.length); i++){
                if((arrayOfStrings[i].length)>theLongestString.length){
                        theLongestString = arrayOfStrings[i]              
                } 
                

        }
        return theLongestString 
}

console.log(longest(arrayOfStrings))



/*const longest2 = function (arr) {
        let longestString = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i].length > longestString.length) {
            longestString = arr[i];
          }
        }
        return longestString;
      };
console.log(longest2(arrayOfStrings))*/
