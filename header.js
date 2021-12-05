





const finalHeader = function(title){
    let header = ""  
    let headerIndent = "" // will be the string with the dashes inserted before and after a given title
    let desiredCharacter = "-"
    let titleModified = "== " + title + " ==" 
    let lengthOfHeader = 50  // determines how long is the header; input based
    let numberOfDashes = (lengthOfHeader - titleModified.length) / 2 // determines how many dashes should be inserted based on the length of the title

    for (i = 0; i < numberOfDashes; i++){

        headerIndent = headerIndent.concat(desiredCharacter)
        
    }

    header = headerIndent + titleModified + headerIndent 

    console.log(header)

}

finalHeader("this is a title")
finalHeader("this is a title")
finalHeader("this is a title")



