/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

let emailContent = " "
const spamIdentifier = function(emailContent){
        if (emailContent.includes ("spam") ||emailContent.includes ("scam")){
                return false
        }else return true

}

console.log(spamIdentifier("kjsfhskfgsdkjghdsgkjgfjkdsfhjkscmdslkfsjldfkdjsf"))