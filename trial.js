
const strivify = function(s){
    //let s = " "
    let indexOf = s.indexOf("Strive")
    let addedString = "Strive"
    if ( indexOf === 0 ) {
        console.log(s)
    } else {
        console.log(addedString + " " + s)
    }
}

strivify("Strive ,ali is tired")