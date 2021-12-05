let title2 = ""

let headerIndent = ""
let lengthOfHeader = 50
//let title = ""


const finalHeader = function(title2){

    let title ="== " + title2 + " =="
    let desiredCharacter = "-"
    let numberOfDashes = (lengthOfHeader - title.length) / 2
    
    for (i = 0; i < numberOfDashes; i++){

        headerIndent = headerIndent.concat(desiredCharacter)
        
        
    }

    header = headerIndent +  title + headerIndent 

    console.log(header)

}
 
finalHeader("this is a not heading")

